/* List of common types used through the application */

export type MenuType = '' | 'settings' | 'actions' | 'menu';

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
