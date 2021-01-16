<template>
    <div class="header">
        <div class="settings">
            <button
                @click="buttonSettings"
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
        <div class="menu">
            <button
                @click="buttonMenu"
            >
                ?
            </button>
        </div>

        <Menu
            :items="list"
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
} from '@/Geoloc';

/* Texts */
const textStart = 'Démarrer la randonée';
const textSettings = 'Configuration';

@Options({
    components: {
        Menu,
        Notification,
    },
})
export default class Home extends Vue {
    get settingsList() {
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
            label: textSettings,
            id: 'settings',
        });

        return list;
    }

    get isRecording() {
        return store.geolocSettings.isRecording;
    }

    get list() {
        const openMenu = store.openMenu;
        const settingsList = this.settingsList;
        const menuList = this.menuList;

        if (openMenu === 'settings') {
            return settingsList;
        } else if (openMenu === 'menu') {
            return menuList;
        }
        return [] as Item[];
    }

    buttonSettings() {
        store.openMenu = 'settings';
    }

    buttonActions() {
        startLog();
    }

    buttonMenu() {
        store.openMenu = 'menu';
    }

    menuSelection(id: string) {
        switch(id) {
            case 'start':
                startLog();
                break;
            case 'settings':
                notification('Not implemented yet', {type: 'error'});
                break;
        }
    }
}
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "settings actions menu";
    height: var(--header-height);
}

.settings {
    grid-area: settings;
}

.actions {
    grid-area: actions;
}

.menu {
    grid-area: menu;
}

button {
    width: 100%;
    max-width: 100px;
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
</style>
