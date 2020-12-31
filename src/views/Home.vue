<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Menu msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Options({
    components: {
        Menu,
    },
})
export default class Home extends Vue {}
</script>
