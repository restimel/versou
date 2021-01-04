/**
 * file purpose:
 * List common values that can be used at different point in the projects.
 * Changes are reactive.
 */

import { reactive } from 'vue';
import {
    MenuType,
    NotificationSettings,
    NotificationMessage,
    GeolocLog,
    GeolocSettings,
} from '@/Types';

interface Store {
    openMenu: MenuType;
    notificationSettings: NotificationSettings;
    notification: NotificationMessage;
    geolocSettings: GeolocSettings;
    currentPath: GeolocLog;
}

const store = reactive<Store>({
    openMenu: '',
    notificationSettings: {
        hardware: true,
        vibrate: true,
    },
    notification: {
        title: '',
        message: '',
        type: 'info',
        active: false,
    },
    geolocSettings: {
        refreshTime: 30000,
        highPrecision: true,
        isRecording: false,
    },
    currentPath: {
        name: '',
        path: [],
        startTime: 0,
        pauseDuration: 0,
    },
});

export default store;
