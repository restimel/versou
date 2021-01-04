/* List of common types used through the application */

export type MenuType = '' | 'settings' | 'actions' | 'menu';

/* {{{ Notification */

export interface NotificationSettings {
    /** Try to send a web-notification for important message */
    hardware: boolean;

    /** Activate vibration on important message */
    vibrate: boolean;
}

export type NotificationType = 'success' | 'warning' | 'error' | 'info';

export interface NotificationMessage {
    title: string;
    message: string;
    type: NotificationType;
    active: boolean;
}

/* }}} */
/* {{{ Geolocalisation */

export interface GeolocPoint {
    lat: number;
    lng: number;
    alt?: number;
    accuracy?: number;
    altAccuracy?: number;
    heading?: number;
    speed?: number;
}

export interface GeolocRecord extends GeolocPoint {
    relativeTime: number;
}

export interface GeolocLog {
    name?: string;
    path: GeolocRecord[];
    startTime: number;
    pauseDuration: number;
}

export interface GeolocSettings {
    refreshTime: number;
    highPrecision: boolean;
    isRecording: boolean;
}

/* }}} */
