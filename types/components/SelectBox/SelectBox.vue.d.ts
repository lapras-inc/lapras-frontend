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
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    context: import("vue").SetupContext<{
        'update:modelValue': null;
    }>;
    onInput: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<SelectBoxOption[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    options: SelectBoxOption[];
    placeholder: string;
    modelValue: string;
}>;
export default _default;
