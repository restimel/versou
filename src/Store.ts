/**
 * file purpose:
 * List common values that can be used at different point in the projects.
 * Changes are reactive.
 */

import { reactive } from 'vue';
import { MenuType } from '@/Types';

interface Store {
    openMenu: MenuType;
}

const store = reactive<Store>({
    openMenu: '',
});

export default store;
