import { Options as PopperOptions } from '@popperjs/core';
import { PropType } from '@vue/composition-api';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    hoverEvent: () => void;
    trigger: import("@vue/composition-api").Ref<HTMLElement | null>;
    container: import("@vue/composition-api").Ref<HTMLElement | null>;
}> & import("@vue/composition-api").Data, {}, {}, {
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
    maxWidth: number;
    options: Partial<PopperOptions>;
    skeleton: boolean;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    maxWidth: number;
    options: Partial<PopperOptions>;
    skeleton: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    hoverEvent: () => void;
    trigger: import("@vue/composition-api").Ref<HTMLElement | null>;
    container: import("@vue/composition-api").Ref<HTMLElement | null>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    maxWidth: number;
    options: Partial<PopperOptions>;
    skeleton: boolean;
} & {}, {
    maxWidth: number;
    options: Partial<PopperOptions>;
    skeleton: boolean;
}, true>);
export default _default;
