<template>
    <select
        :id="value.id"
        :value="value.value"
        :title="value.title"
        :disabled="value.disabled"
        @input="change"
    >
        <option v-for="opt of options"
            :key="opt.id"
            :value="opt.value"
            :disabled="opt.disabled"
            :class="opt.class"
        >
            {{opt.text}}
        </option>
    </select>
</template>
<script lang="ts">
import {
    FormItem,
    FieldSelectOption,
} from '@/Types';
import { Options, Vue } from 'vue-class-component';


@Options({
    props: {
        value: Object,
    },
    emits: ['input', 'action'],
})
export default class FieldSelect extends Vue {
    private value!: FormItem;

    get options() {
        const options: FieldSelectOption[] = this.value.options || [];
        const id = this.value.id;

        options.forEach((opt, idx) => {
            if (!opt.id) {
                opt.id = opt.value || `option-${id}-${idx}`;
            }
            if (opt.text === undefined) {
                opt.text = opt.value;
            }
        });

        return options;
    }

    private change(evt: Event) {
        const element = evt.currentTarget as HTMLSelectElement;
        const value = element.value;

        this.$emit('input', value);
    }
}
</script>

<style scoped>
.special-action {
    color: var(--secondary-text-color);
    font-style: italic;
}
</style>
