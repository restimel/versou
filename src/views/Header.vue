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
    </div>
    <Menu
        :items="list"
    />
</template>

<script lang="ts">
import store from '@/Store';
import { Options, Vue } from 'vue-class-component';
import Menu, { Item } from '@/components/Menu.vue'; // @ is an alias to /src

@Options({
    components: {
        Menu,
    },
})
export default class Home extends Vue {
    get settingsList() {
        const list: Item[] = [];

        list.push({
            label: 'item1',
            id: 'item1',
        });

        return list;
    }

    get list() {
        const openMenu = store.openMenu;
        const settingsList = this.settingsList;

        if (openMenu === 'settings') {
            return settingsList;
        }
        return [] as Item[];
    }

    buttonSettings() {
        store.openMenu = 'settings';
    }

    buttonActions() {
        console.log('TODO button actions');
    }

    buttonMenu() {
        console.log('TODO button menu');
    }
}
</script>

<style scoped>
.header {
    display: grid;
    grid-template: 1fr 1fr 1fr;
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
