<template>
    <button
        :id="value.id"
        :title="value.title"
        :disabled="value.disabled"
        :class="{
            'keep-press': keepPress,
            'in-progress': isClicking,
        }"
        ref="button"
        @click="click"
        @mousedown="mousedown"
        @mouseout="mouseout"
    >
        {{value.value}}
    </button>
    <span v_if="!!message"
        class="comment"
    >
        {{message}}
    </span>
</template>
<script lang="ts">
import {
    FieldButtonOption,
    FormItem,
} from '@/Types';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        value: Object,
    },
    emits: ['input', 'action'],
})
export default class FieldButton extends Vue {
    private value!: FormItem;

    private message = '';
    private timerMessage = 0;
    private allowAction = 0;
    private isClicking = false;

    get options(): FieldButtonOption {
        return this.value.options as FieldButtonOption || {};
    }

    get keepPress() {
        const options = this.options;
        const keepPress = options.keepPress || 0;

        return !!keepPress;
    }

    private click() {
        const allowed = this.isClicking && Date.now() > this.allowAction;
        if (allowed) {
            this.$emit('action', this.value.options);
        }
        this.clearMessage();
    }

    private mousedown() {
        const options = this.options;
        const keepPress = options.keepPress || 0;

        if (keepPress) {
            const sec = keepPress / 1000;
            this.displayMessage(`Keep button pressed for ${sec} seconds`, keepPress);
            const button = this.$refs.button as HTMLButtonElement;
            button.style.transitionDuration = `${keepPress}ms`;
        }
        this.allowAction = Date.now() + keepPress;
        this.isClicking = true;
    }

    private mouseout() {
        this.clearMessage();
    }

    private displayMessage(msg: string, time: number) {
        clearTimeout(this.timerMessage);
        this.message = msg;
        this.timerMessage = setTimeout(() => this.message = '', time);
    }

    private clearMessage() {
        clearTimeout(this.timerMessage);
        this.message = '';
        const button = this.$refs.button as HTMLButtonElement;
        button.style.transitionDuration = '';
        this.isClicking = false;
    }
}
</script>

<style scoped>
.keep-press {
    transition-duration: 0ms;
    box-shadow: inset 0 0 2px -2px var(--active-button-background-color);
}
.keep-press.in-progress {
    transition-property: box-shadow;
    box-shadow: inset 0 0 2px 1.1em var(--active-button-background-color);
}
</style>
