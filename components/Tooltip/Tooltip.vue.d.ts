import { Options as PopperOptions } from '@popperjs/core';
import { PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    options: {
        type: PropType<Partial<PopperOptions>>;
        default: () => {};
    };
    skeleton: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
}, {
    hoverEvent: () => void;
    trigger: import('../../../vue/dist/vue.esm-bundler.js').Ref<HTMLElement | null>;
    container: import('../../../vue/dist/vue.esm-bundler.js').Ref<HTMLElement | null>;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    options: {
        type: PropType<Partial<PopperOptions>>;
        default: () => {};
    };
    skeleton: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    options: Partial<PopperOptions>;
    skeleton: boolean;
    maxWidth: number;
}, {}>;
export default _default;
