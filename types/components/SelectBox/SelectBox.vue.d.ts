import { PropType } from 'vue';
export interface SelectBoxOption {
    value: string | number;
    label: string;
}
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<SelectBoxOption[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
}, {
    context: import("vue").SetupContext<{
        input: null;
    }>;
    onInput: (e: Event) => void;
}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {
    input: null;
}, string, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<SelectBoxOption[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    value: string;
    options: SelectBoxOption[];
    placeholder: string;
}>;
export default _default;
