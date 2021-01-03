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
} from '@/Types';

interface Store {
    openMenu: MenuType;
    notificationSettings: NotificationSettings;
    notification: NotificationMessage;
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
});

export default store;
