<template>
    <button
        class="button-back"
        @click="onclick"
    >
        {{textBack}}
    </button>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

const textBack = '← Retour';

@Options({
})
export default class FieldInput extends Vue {
    private textBack = textBack;

    private onclick() {
        this.$router.go(-1);
    }
}
</script>
<style scoped>
.button-back {
    width: 100%;
    color: var(--button-color);
}
.button-back:hover {
    color: var(--button-color-hover);
}
</style>
