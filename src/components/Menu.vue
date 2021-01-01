<template>
    <div
        class="menu"
        :class="{
            hidden: isEmpty,
        }"
    >
        <div v-for="item of items"
            :key="item.id"
            class="menu__item"
            @click="onClick(item)"
        >
            {{item.label}}
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export interface Item {
    label: string;
    id: string;
    callback?: () => void;
}

@Options({
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
})
export default class Menu extends Vue {
    public items: Item[] = [];

    get isEmpty() {
        console.log('---', this, this.$props);
        return this.items.length === 0;
    }

    private onClick(item: Item) {
        if (typeof item.callback === 'function') {
            item.callback();
        }
        this.$emit('click', item.id);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
    position: fixed;
    top: var(--header-height);
    left: 50%;
    transform: translate(-50%, 0);

    background-color: var(--menu-bg-color);
    padding: 1em;

    box-shadow: 5px 2px 10px 0 black;
}
.menu__item {
    cursor: pointer;
    color: var(--link-color);
}
.menu__item:hover {
    color: var(--link-color-hover);
}
.menu__item:active {
    color: var(--link-color-active);
}
.hidden {
    display: none;
}
</style>
