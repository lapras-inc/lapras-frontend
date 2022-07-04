import { PropType } from '@vue/composition-api';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
}> & import("@vue/composition-api").Data, {}, {}, {
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
}, {
    required: boolean | null;
    label: string;
    subLabel: string;
    errorMessage: string;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    required: boolean | null;
    label: string;
    subLabel: string;
    errorMessage: string;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    required: boolean | null;
    label: string;
    subLabel: string;
    errorMessage: string;
} & {}, {
    required: boolean | null;
    label: string;
    subLabel: string;
    errorMessage: string;
}, true>);
export default _default;
