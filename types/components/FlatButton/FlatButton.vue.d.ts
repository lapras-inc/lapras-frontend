import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    skin: {
        type: PropType<"disabled" | "muted" | "important" | "primary" | "primary-line" | "secondary" | "tertiary">;
        default: string;
    };
    size: {
        type: PropType<"s" | "m" | "xl" | "l" | "xs">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    enhanced: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    context: import("vue").SetupContext<{}>;
}, {}, {}, {}, import("vue/types/v3-component-options.js").ComponentOptionsMixin, import("vue/types/v3-component-options.js").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    skin: {
        type: PropType<"disabled" | "muted" | "important" | "primary" | "primary-line" | "secondary" | "tertiary">;
        default: string;
    };
    size: {
        type: PropType<"s" | "m" | "xl" | "l" | "xs">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    disabled: boolean;
    size: "s" | "m" | "xl" | "l" | "xs";
    skin: "disabled" | "muted" | "important" | "primary" | "primary-line" | "secondary" | "tertiary";
    tag: string;
    enhanced: boolean;
}>;
export default _default;
