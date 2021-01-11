<template>
    <Header class="header" />
    <router-view/>
</template>
<script>
import Header from '@/views/Header';

export default {
    components: {
        Header,
    },
};
</script>
<style>
:root {
    --color: rgba(0, 0, 0, 1);
    --primary-color: rgba(200, 130, 0, 1);

    --button-color: var(--primary-color);
    --button-color-hover: rgba(220, 190, 0, 1);
    --button-color-active: rgba(255, 220, 50, 1);
    --link-color: var(--color);
    --link-color-hover: var(--primary-color);
    --link-color-active: rgba(255, 220, 50, 1);
    --link-color-disabled: rgba(100, 100, 100, 1);

    --button-bg-color: rgba(40, 0, 20, 1);
    --button-bg-color-active: rgba(70, 60, 70, 1);
    --menu-bg-color: rgba(240, 240, 255, 1);
    --menu-bg-color-disabled: rgba(200, 200, 200, 1);

    --header-height: 50px;
}

html {
    height: 100%;
}

body {
    margin: 0;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--color);
    height: 100%;
}

#app {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 50px minmax(0, 1fr);
    grid-template-areas: "header" "main";
}

.header {
    grid-area: header;
}

button {
    cursor: pointer;
}
</style>
