declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseTextareaHeight: {
        type: NumberConstructor;
        default: number;
    };
}, {
    textarea: import('../../../vue/dist/vue.esm-bundler.js').Ref<HTMLElement | null>;
    onInput: (e: Event) => void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    'update:modelValue': null;
    blur: null;
    focus: null;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseTextareaHeight: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    multiline: boolean;
    error: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
}, {}>;
export default _default;
