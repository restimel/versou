<template>
    <div
        class="menu"
        :class="[{
            hidden: isEmpty,
        }, position]"
    >
        <div v-for="item of items"
            :key="item.id"
            class="menu__item"
            :class="{
                disabled: !!item.disabled,
            }"
            @click.prevent.stop="onClick(item)"
        >
            {{item.label}}
        </div>
    </div>
</template>

<script lang="ts">
import { MenuPosition } from '@/Types';
import { Options, Vue } from 'vue-class-component';

export interface Item {
    label: string;
    id: string;
    disabled?: boolean;
    callback?: () => void;
}

@Options({
    props: {
        items: {
            type: Array,
            required: true,
        },
        position: {
            type: String,
            default: 'center',
        },
    },
    emits: ['click'],
})
export default class Menu extends Vue {
    public items: Item[] = [];
    private menuPosition!: MenuPosition;

    get isEmpty() {
        return this.items.length === 0;
    }

    private onClick(item: Item) {
        if (item.disabled) {
            return;
        }
        if (typeof item.callback === 'function') {
            item.callback();
        }
        this.$emit('click', item.id);
    }
}
</script>

<style scoped>
.menu {
    position: fixed;
    z-index: 1500;
    top: var(--header-height);

    background-color: var(--menu-bg-color);

    box-shadow: 5px 2px 10px 0 black;
}
.menu.left {
    left: 4px;
}
.menu.right {
    right: 4px;
}
.menu.center {
    left: 50%;
    transform: translate(-50%, 0);
}

.menu__item {
    padding: 1em;

    cursor: pointer;
    color: var(--link-color);
}
.menu__item:hover {
    color: var(--link-color-hover);
    background-color: rgba(255, 255, 2555, 0.4);
}
.menu__item:active {
    color: var(--link-color-active);
}
.menu__item.disabled,
.menu__item.disabled:hover,
.menu__item.disabled:active {
    cursor: not-allowed;
    color: var(--link-color-disabled);
    background-color: var(--menu-bg-color-disabled);
}

.hidden {
    display: none;
}
</style>
