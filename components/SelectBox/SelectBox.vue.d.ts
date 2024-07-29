import { PropType } from '../../../vue/dist/vue.esm-bundler.js';

export interface SelectBoxOption {
    value: string | number;
    label: string;
}
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
            [name: string]: import('../../../vue/dist/vue.esm-bundler.js').Slot<any> | undefined;
        }>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void;
    };
    onInput: (e: Event) => void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    'update:modelValue': null;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
