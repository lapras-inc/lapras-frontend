import { PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    skin: {
        type: PropType<"important" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted" | "disabled">;
        default: string;
    };
    size: {
        type: PropType<"xl" | "l" | "m" | "s" | "xs">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    enhanced: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    skin: {
        type: PropType<"important" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted" | "disabled">;
        default: string;
    };
    size: {
        type: PropType<"xl" | "l" | "m" | "s" | "xs">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    enhanced: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    skin: "disabled" | "important" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted";
    tag: string;
    size: "s" | "xl" | "l" | "m" | "xs";
    disabled: boolean;
    enhanced: boolean;
}, {}>;
export default _default;
