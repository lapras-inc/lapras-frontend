declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    textarea: import("@vue/composition-api").Ref<HTMLElement | null>;
}> & import("@vue/composition-api").Data, {}, {}, {
    multiline: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseTextareaHeight: {
        type: NumberConstructor;
        default: number;
    };
}, {
    error: boolean;
    value: string;
    multiline: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    error: boolean;
    value: string;
    multiline: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    textarea: import("@vue/composition-api").Ref<HTMLElement | null>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    error: boolean;
    value: string;
    multiline: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
} & {}, {
    error: boolean;
    value: string;
    multiline: boolean;
    autoExpand: boolean;
    baseTextareaHeight: number;
}, true>);
export default _default;
