declare const _default: import("vue").DefineComponent<{
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
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
    context: import("vue").SetupContext<{}>;
    textarea: import("vue").Ref<HTMLElement | null>;
    onInput: (e: Event) => void;
}, {}, {}, {}, import("vue/types/v3-component-options.js").ComponentOptionsMixin, import("vue/types/v3-component-options.js").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
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
}>>, {
    error: boolean;
    value: string;
    multiline: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
}>;
export default _default;
