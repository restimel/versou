<template>
    <label
        class="field__label"
        :for="value.id"
        :title="value.title"
    >
        {{labelDisplay}}
    </label>
    <span class="field__value">
        <span>
            <component
                :is="componentKind"
                :value="value"

                @input="$emit('input', $event)"
                @action="$emit('action', $event)"
            />
            <span v-if="unit">
                {{unit}}
            </span>
        </span>
        <div v-if="value.comment"
            class="comment"
        >
            {{value.comment}}
        </div>
    </span>
</template>

<script lang="ts">
import {
    FormItem,
} from '@/Types';
import { Options, Vue } from 'vue-class-component';

import FieldInput from '@/components/fields/FieldInput.vue';
import FieldTextarea from '@/components/fields/FieldTextarea.vue';
import FieldText from '@/components/fields/FieldText.vue';
import FieldSelect from '@/components/fields/FieldSelect.vue';
import FieldList from '@/components/fields/FieldList.vue';
import FieldButton from '@/components/fields/FieldButton.vue';
import FieldImage from '@/components/fields/FieldImage.vue';

@Options({
    props: {
        value: Object,
    },
    emits: ['input', 'action'],
    components: {
        FieldInput,
        FieldTextarea,
        FieldText,
        FieldSelect,
        FieldList,
        FieldButton,
        FieldImage,
    },
})
export default class Field extends Vue {
    private value!: FormItem;

    private get componentKind() {
        const mapping = {
            text: 'FieldInput',
            number: 'FieldInput',
            boolean: 'FieldInput',
            range: 'FieldInput',
            longText: 'FieldTextarea',
            empty: 'FieldText',
            emptyLine: 'FieldText',
            rawText: 'FieldText',
            select: 'FieldSelect',
            list: 'FieldList',
            button: 'FieldButton',
            image: 'FieldImage',
        };

        const kind = mapping[this.value.type];
        return kind === undefined ? 'input' : kind;
    }

    private get labelDisplay() {
        const label = this.value.label;
        if (!label) {
            return '';
        }
        return `${label}:`;
    }

    private get unit(): string {
        const unit = this.value.unit;
        if (typeof unit !== 'string') {
            return '';
        }
        return unit;
    }
}
</script>

<style scoped>
.field__label {
    justify-self: right;
    font-weight: bold;
}
.field__value {
    font-style: italic;
    justify-self: left;
}
.comment {
    text-align: left;
    font-style: italic;
    color: var(--secondary-text-color);
    font-size: 0.8em;
}
</style>
