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
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
