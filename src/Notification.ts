/**
 * file purpose:
 * Send notification to user.
 */

import store from '@/Store';
import codeMorse, {vibratePattern} from '@/tools/Morse';
import {
    NotificationType,
} from '@/Types';

interface NotifOptions {
    title?: string;
    important?: boolean;
    type?: NotificationType;
    vibrationMessage?: string;
    delay?: number;
}

const notificationSettings = store.notificationSettings;
let timer = 0;

export function vibrate(code = '**WAIT**'): boolean {
    if (!notificationSettings.vibrate || !code) {
        return false;
    }
    const morse = codeMorse(code);
    const vibration = vibratePattern(morse);

    return navigator.vibrate(vibration);
}

export async function messagePermission() {
    const permission = await Notification.requestPermission();
    if (permission === 'denied') {
        notificationSettings.hardware = false;
    }
    return permission;
}

export async function sendHardNotification(message: string, options: NotifOptions = {}) {
    if (!notificationSettings.hardware) {
        return;
    }

    const {
        title = '',
        vibrationMessage = '',
    } = options;

    if (Notification.permission !== 'granted') {
        const permission = await messagePermission();
        if (permission === 'denied') {
            return;
        }
    }

    vibrate(vibrationMessage);

    const messageTitle = title ? `Versou: ${title}` : 'Versou';

    return new Notification(messageTitle, {
        body: message,
    });
}

export default function(message: string, options: NotifOptions = {}) {
    const {
        important = false,
        vibrationMessage,
        type = 'info',
        delay = 5000,
        title = '',
    } = options;

    if (important) {
        sendHardNotification(message, options);
    } else if (vibrationMessage) {
        vibrate(vibrationMessage);
    }

    clearTimeout(timer);

    store.notification = {
        title: title,
        message: message,
        type: type,
        active: true,
    };

    timer = setTimeout(() => {
        store.notification.active = false;
    }, delay);
}
