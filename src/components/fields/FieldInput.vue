<template>
    <input
        :id="value.id"
        :type="type"
        :value="value.value"
        :placeholder="value.placeholder"
        :title="value.title"
        :disabled="value.disabled"
        :min="value.min"
        :max="value.max"
        :checked="!!value.value"
        @input="change"
    />
</template>
<script lang="ts">
import {
    FormItem,
} from '@/Types';
import { Options, Vue } from 'vue-class-component';

type InputValueType = 'text' | 'number' | 'boolean' | 'range';

@Options({
    props: {
        value: Object,
    },
    emits: ['input', 'action'],
})
export default class FieldInput extends Vue {
    private value!: FormItem;

    get type() {
        const valueType = this.value.type as InputValueType;
        const mapping = {
            text: 'text',
            number: 'number',
            boolean: 'checkbox',
            range: 'range',
        };

        const type = mapping[valueType];
        return type;
    }

    private change(evt: InputEvent) {
        const element: HTMLInputElement = evt.currentTarget as HTMLInputElement;
        const value = this.value.type === 'boolean' ? element.checked : element.value;
        this.$emit('input', value);
    }
};
</script>