<template>
    <div class="header">
        <div class="menuActions">
            <button
                @click="buttonMenuActions"
            >
                !
            </button>
        </div>
        <div class="actions">
            <button
                @click="buttonActions"
            >
                >
            </button>
        </div>
        <div class="settings">
            <button
                @click="buttonSettings"
            >
                ?
            </button>
        </div>

        <Menu
            :items="list"
            :position="menuPosition"
            class="header-menu"
            @click="menuSelection"
        />
        <Notification />
    </div>
</template>

<script lang="ts">
import store from '@/Store';
import { Options, Vue } from 'vue-class-component';
import Menu, { Item } from '@/components/Menu.vue'; // @ is an alias to /src
import Notification from '@/components/Notification.vue';
import notification from '@/Notification';
import {
    startLog,
    togglePlay,
} from '@/Geoloc';
import { MenuPosition } from '@/Types';

/* Texts */
const textStart = 'Démarrer la randonée';
const textGeolocSettings = 'Configuration';
const textLoad = 'Charger une rando';
const textAbout = 'À propos';

@Options({
    components: {
        Menu,
        Notification,
    },
})
export default class Home extends Vue {
    get menuActionsList() {
        const list: Item[] = [];

        list.push({
            label: textStart,
            id: 'start',
            disabled: this.isRecording,
        });

        return list;
    }

    get menuList() {
        const list: Item[] = [];

        list.push({
            label: textGeolocSettings,
            id: 'geolocSettings',
        }, {
            label: textLoad,
            id: 'loadTrek',
        }, {
            label: textAbout,
            id: 'about',
        });

        return list;
    }

    get menuPosition(): MenuPosition {
        const openMenu = store.openMenu;

        if (openMenu === 'settings') {
            return 'right';
        }
        if (openMenu === 'menuActions') {
            return 'left';
        }
        return 'center';
    }

    get isRecording() {
        return store.geolocSettings.isRecording;
    }

    get list() {
        const openMenu = store.openMenu;
        const menuActionsList = this.menuActionsList;
        const menuList = this.menuList;

        if (openMenu === 'menuActions') {
            return menuActionsList;
        } else if (openMenu === 'settings') {
            return menuList;
        }
        return [] as Item[];
    }

    buttonMenuActions() {
        if (store.openMenu === 'menuActions') {
            store.openMenu = '';
        } else {
            store.openMenu = 'menuActions';
        }
    }

    buttonActions() {
        store.openMenu = '';
        if (this.isRecording) {
            togglePlay();
        } else {
            startLog();
        }
    }

    buttonSettings() {
        if (store.openMenu === 'settings') {
            store.openMenu = '';
        } else {
            store.openMenu = 'settings';
        }
    }

    menuSelection(id: string) {
        if (typeof id !== 'string') {
            return;
        }
        store.openMenu = '';
        switch(id) {
            case 'start':
                startLog();
                break;
            case 'about':
                this.$router.push('About');
                break;
            case 'geolocSettings':
                this.$router.push('geolocsettings');
                break;
            default:
                notification(`L'action "${id}" n'est pas implémentée`, {
                    type: 'error',
                });
        }
    }
}
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "menuActions actions settings";
    height: var(--header-height);
}

.menuActions {
    grid-area: menuActions;
}

.actions {
    grid-area: actions;
}

.settings {
    grid-area: settings;
}

button {
    width: 100%;
    height: 100%;
    font-size: calc(var(--header-height - 10px));

    color: var(--button-color);
    background-color: var(--button-bg-color);
    border: 4px outset var(--button-color);
}
button:hover {
    color: var(--button-color-hover);
}
button.active,
button:active {
    color: var(--button-color-active);
    background-color: var(--button-bg-color-active);
    border-style: inset;
}

.header-menu {
    width: 33%;
}
</style>
