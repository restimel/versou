/**
 * file purpose:
 * Get and register geoloc position.
 */

import store from '@/Store';
import notification from '@/Notification';
import {
    GeolocPoint,
    GeolocRecord,
} from './Types';

let pauseTs = 0;
let timer = 0;
let nbLastError = 0;
const nbErrorMax = 3;

const c = console;

/* Texts */
const permissionDenied = 'Vous devez autoriser la géolocalisation pour enregistrer votre position.';
const unknownError = 'Une erreur est survenue pour récupérer les coordonées.';
const textRetrying = 'Nouvel essai ...';

function addLog(point: GeolocPoint, timestamp?: number) {
    const currentPath = store.currentPath;
    const currentTime = Date.now();

    c.log('timestamp', timestamp, 'Date.now()', currentTime);
    const relativeTime = currentTime - currentPath.startTime - currentPath.pauseDuration;
    const record: GeolocRecord = {
        ...point,
        relativeTime,
    };

    currentPath.path.push(record);
}

function continueLog(delay?: number) {
    const geolocSettings = store.geolocSettings;
    const duration = typeof delay === 'number' ? delay : geolocSettings.refreshTime;

    timer = setTimeout(getPosition, duration);
}

function handlePosition(position: GeolocationPosition) {
    const coords = position.coords;

    nbLastError = 0;

    const check = (value: number | null | undefined) => {
        if (typeof value === 'number') {
            return value;
        }
        return NaN;
    };

    addLog({
        lat: coords.latitude,
        lng: coords.longitude,
        accuracy: coords.accuracy,
        alt: check(coords.altitude),
        altAccuracy: check(coords.altitudeAccuracy),
        heading: check(coords.heading),
        speed: check(coords.speed),
    }, position.timestamp);

    continueLog();
}

function handleError(error: GeolocationPositionError) {
    const geolocSettings = store.geolocSettings;
    let title: string | undefined;
    let message: string | undefined;

    const retryLog = () => {
        nbLastError++;
        if (nbLastError >= nbErrorMax) {
            pause();
            title = unknownError;
            message = error.message;
        } else {
            notification(textRetrying, {
                title: unknownError,
                type: 'warning',
                important: false,
                delay: 10000,
            });
            continueLog(10);
        }
    };

    switch(error.code) {
        case error.PERMISSION_DENIED:
            pause();
            title = permissionDenied;
            message = error.message;
            break;
        case error.POSITION_UNAVAILABLE:
            if (nbLastError === 0 && geolocSettings.highPrecision) {
                /* Downgrade the geolocalisation */
                geolocSettings.highPrecision = false;
            }
            retryLog();
            break;
        case error.TIMEOUT:
            retryLog();
            break;
        default:
            pause();
            title = unknownError;
            message = error.message;
    }

    if (message) {
        notification(message, {
            title: title,
            type: 'error',
            important: true,
            vibrationMessage: '**ERROR**',
            delay: 15000,
        });
    }
}

function getPosition() {
    const geolocSettings = store.geolocSettings;
    clearTimeout(timer);

    const options: PositionOptions = {
        enableHighAccuracy: geolocSettings.highPrecision,
    };

    navigator.geolocation.getCurrentPosition(handlePosition, handleError, options);
}

export function pause() {
    clearTimeout(timer);
    if (pauseTs !== 0) {
        return;
    }
    pauseTs = Date.now();
}

export function play() {
    const currentPath = store.currentPath;

    if (pauseTs === 0) {
        return;
    }

    clearTimeout(timer);
    const duration = Date.now() - pauseTs;
    currentPath.pauseDuration += duration;
    pauseTs = 0;
    nbLastError = 0;

    getPosition();
}

export function stop() {
    clearTimeout(timer);

    if (pauseTs === 0) {
        pauseTs = Date.now();
    }
    store.geolocSettings.isRecording = false;
    return true;
}

export function togglePlay() {
    if (pauseTs === 0) {
        pause();
    } else {
        play();
    }
}

export function startLog() {
    store.currentPath = {
        name: '',
        path: [],
        startTime: Date.now(),
        pauseDuration: 0,
    };

    clearTimeout(timer);
    store.geolocSettings.isRecording = true;
    getPosition();
}
