<template>
    <div
        class="notification"
        :class="{
            hidden: !isActive,
            info: type === 'info',
            success: type === 'success',
            warning: type === 'warning',
            error: type === 'error',
        }"

        @click="onClick"
    >
        <header v-if="title">
            {{title}}
        </header>
        {{message}}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/Store';

@Options({
    props: {},
})
export default class Menu extends Vue {
    private time = Date.now();

    get isActive() {
        return store.notification.active;
    }

    get title() {
        return store.notification.title;
    }

    get message() {
        return store.notification.message;
    }

    get type() {
        return store.notification.type;
    }

    private onClick() {
        store.notification.active = false;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification {
    position: fixed;
    bottom: 1em;
    right: 1em;

    padding: 1.5em;

    border: 5px double white;
    box-shadow: -2px -5px 10px 0 black;

    cursor: pointer;
}
.notification.info {
    background-color: rgb(100, 150, 200);
}
.notification.success {
    background-color: rgb(100, 200, 120);
}
.notification.warning {
    background-color: rgb(210, 180, 100);
}
.notification.error {
    background-color: rgb(200, 100, 100);
}
.notification header {
    font-weight: bold;
}
.hidden {
    display: none;
}
</style>
