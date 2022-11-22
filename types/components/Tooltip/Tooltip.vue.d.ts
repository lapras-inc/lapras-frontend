import { Options as PopperOptions } from '@popperjs/core';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
    context: import("vue").SetupContext<{}>;
    hoverEvent: () => void;
    trigger: import("vue").Ref<HTMLElement | null>;
    container: import("vue").Ref<HTMLElement | null>;
}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
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
    maxWidth: number;
    options: Partial<PopperOptions>;
    skeleton: boolean;
}>;
export default _default;
