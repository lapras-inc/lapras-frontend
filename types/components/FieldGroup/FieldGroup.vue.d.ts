import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    subLabel: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: PropType<boolean | null>;
        default: null;
    };
}, {
    context: import("vue").SetupContext<{}>;
}, {}, {}, {}, import("vue/types/v3-component-options.js").ComponentOptionsMixin, import("vue/types/v3-component-options.js").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    subLabel: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: PropType<boolean | null>;
        default: null;
    };
}>>, {
    required: boolean | null;
    label: string;
    subLabel: string;
    errorMessage: string;
}>;
export default _default;
