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

async function sendHardNotification(message: string, vibrationMessage?: string) {
    if (!notificationSettings.hardware) {
        return;
    }

    if (Notification.permission === 'denied') {
        const permission = await Notification.requestPermission();
        if (permission === 'denied') {
            notificationSettings.hardware = false;
            return;
        }
    }

    vibrate(vibrationMessage);

    return new Notification(message, {});
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
        sendHardNotification(message, vibrationMessage);
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
