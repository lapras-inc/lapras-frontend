import { Options as PopperOptions } from '@popperjs/core';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
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
    trigger: import('vue').Ref<HTMLElement | null>;
    container: import('vue').Ref<HTMLElement | null>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
