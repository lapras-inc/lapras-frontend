declare const _default: import('vue').DefineComponent<{
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
    escapedHref: import('vue').ComputedRef<string | undefined>;
    formattedRel: import('vue').ComputedRef<string | undefined>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}, {}>;
export default _default;
