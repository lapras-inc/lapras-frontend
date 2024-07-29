import { PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, unknown, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    label: string;
    required: boolean | null;
    subLabel: string;
    errorMessage: string;
}, {}>;
export default _default;
