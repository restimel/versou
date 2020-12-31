<template>
    <div
        class="menu"
        :class="{
            hidden: isEmpty,
        }"
    >
        Coucou
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export interface Item {
    label: string;
    id?: string;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
    color: red;
}
</style>
