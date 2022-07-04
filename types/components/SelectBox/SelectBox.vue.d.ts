import { PropType } from '@vue/composition-api';
export interface SelectBoxOption {
    value: string | number;
    label: string;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    onInput: (e: Event) => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    options: {
        type: PropType<SelectBoxOption[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
}, {
    value: string;
    options: SelectBoxOption[];
    placeholder: string;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    value: string;
    options: SelectBoxOption[];
    placeholder: string;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    context: import("@vue/composition-api").SetupContext<{}>;
    onInput: (e: Event) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    value: string;
    options: SelectBoxOption[];
    placeholder: string;
} & {}, {
    value: string;
    options: SelectBoxOption[];
    placeholder: string;
}, true>);
export default _default;
