<template>
    <textarea
        :id="value.id"
        :value="value.value"
        :placeholder="value.placeholder"
        :title="value.title"
        :disabled="value.disabled"
        @input="change"
    />
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

    private change(evt: Event) {
        const element = evt.currentTarget as HTMLTextAreaElement;
        const value = element.value;

        this.$emit('input', value);
    }
};
</script>