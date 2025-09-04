declare const _default: import("vue").DefineComponent<{
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
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    textarea: import("vue").Ref<HTMLElement | null>;
    onInput: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': null;
    blur: null;
    focus: null;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    error: boolean;
    disabled: boolean;
    multiline: boolean;
    modelValue: string;
    autoExpand: boolean;
    baseTextareaHeight: number;
}, {}>;
export default _default;
