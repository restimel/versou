import * as L from 'leaflet';

/* List of common types used through the application */

/* {{{ Menu */

export type MenuType = '' | 'settings' | 'actions' | 'menuActions';
export type MenuPosition = 'left' | 'center' | 'right';

/* }}} */
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
/* {{{ Map */

export type LayerId = 'satellite' | 'Openstreetmap' | 'carte IGN';

export interface LayerProps {
    url: string;
    maxZoom?: number;
    attribution?: string;
}

export interface MapSettings {
    layer: LayerId;
    iconPosition: string;
}

export type ImageType = 'url' | 'base64';

export interface MarkerSetting {
    label: string;
    url: string;
    type: ImageType;
}

/* }}} */
/* {{{ Form */

export type FieldType = 'text' | 'number' | 'boolean' | 'range' | 'select'
    | 'longText' | 'empty' | 'emptyLine' | 'rawText' | 'list' | 'button'
    | 'image';

export interface FieldSelectOption {
    id?: string;
    text: string;
    value: string;
    disabled?: boolean;
    class?: string;
}

export interface FieldButtonOption {
    keepPress?: number;
}

export interface FormItem {
    id: string;
    type: FieldType;
    value: string | number | boolean | string[];
    label: string;
    unit?: string;
    placeholder?: string;
    title?: string;
    options?: FieldSelectOption[] | FieldButtonOption;
    min?: number;
    max?: number;
    disabled: boolean;
    comment?: string;
}

/* }}} */
