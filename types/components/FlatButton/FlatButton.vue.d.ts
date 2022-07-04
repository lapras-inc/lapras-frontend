import { PropType } from '@vue/composition-api';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
}> & import("@vue/composition-api").Data, {}, {}, {
    skin: {
        type: PropType<"disabled" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted">;
        default: string;
    };
    size: {
        type: PropType<"s" | "xl" | "l" | "m" | "xs">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    enhanced: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    disabled: boolean;
    size: "s" | "xl" | "l" | "m" | "xs";
    skin: "disabled" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted";
    tag: string;
    enhanced: boolean;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    disabled: boolean;
    size: "s" | "xl" | "l" | "m" | "xs";
    skin: "disabled" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted";
    tag: string;
    enhanced: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    disabled: boolean;
    size: "s" | "xl" | "l" | "m" | "xs";
    skin: "disabled" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted";
    tag: string;
    enhanced: boolean;
} & {}, {
    disabled: boolean;
    size: "s" | "xl" | "l" | "m" | "xs";
    skin: "disabled" | "primary" | "primary-line" | "secondary" | "tertiary" | "muted";
    tag: string;
    enhanced: boolean;
}, true>);
export default _default;
