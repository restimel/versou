<template>
    <Header />
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
    --button-color: rgba(200, 130, 0, 1);
    --button-color-hover: rgba(220, 190, 0, 1);
    --button-color-active: rgba(255, 220, 50, 1);

    --button-bg-color: rgba(40, 0, 20, 1);
    --button-bg-color-active: rgba(70, 60, 70, 1);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

button {
  cursor: pointer;
}
</style>
