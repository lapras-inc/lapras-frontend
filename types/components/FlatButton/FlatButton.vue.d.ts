import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    disabled: boolean;
    size: "s" | "m" | "xl" | "l" | "xs";
    tag: string;
    skin: "disabled" | "muted" | "important" | "primary" | "primary-line" | "secondary" | "tertiary";
    enhanced: boolean;
}, {}>;
export default _default;
