declare const _default: import("vue").DefineComponent<{
    href: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    force: {
        type: BooleanConstructor;
        default: boolean;
    };
    target: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
    };
}, {
    escapedHref: import("vue").ComputedRef<string | undefined>;
    formattedRel: import("vue").ComputedRef<string | undefined>;
}, {}, {}, {}, import("vue/types/v3-component-options.js").ComponentOptionsMixin, import("vue/types/v3-component-options.js").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    force: {
        type: BooleanConstructor;
        default: boolean;
    };
    target: {
        type: StringConstructor;
    };
    rel: {
        type: StringConstructor;
    };
}>>, {
    force: boolean;
}>;
export default _default;
