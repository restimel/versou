<template>
    <img
        :id="value.id"
        :title="value.title"
        :src="value.value"
        :class="{
            disabled: value.disabled,
        }"
    >
</template>
<script lang="ts">
import {
    FormItem,
} from '@/Types';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        value: Object,
    },
    emits: ['input', 'action'],
})
export default class FieldImage extends Vue {
    private value!: FormItem;
}
</script>
<style scoped>
.disabled {
    opacity: 0.5;
}
</style>
