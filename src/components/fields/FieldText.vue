<template>
    <span
        :id="value.id"
        :title="value.title"
        :class="{
            disabled: value.disabled,
        }"
    >
        {{value.value}}
    </span>
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
export default class FieldInput extends Vue {
    private value!: FormItem;
}
</script>
<style scoped>
span {
    font-style: italic;
}
</style>
