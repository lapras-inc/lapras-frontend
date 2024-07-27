import { PropType } from 'vue';

export interface SelectBoxOption {
    value: string | number;
    label: string;
}
declare const _default: import('vue').DefineComponent<{
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
    context: {
        attrs: {
            [x: string]: unknown;
        };
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void;
    };
    onInput: (e: Event) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    'update:modelValue': null;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
    modelValue: string;
    options: SelectBoxOption[];
    placeholder: string;
}, {}>;
export default _default;
