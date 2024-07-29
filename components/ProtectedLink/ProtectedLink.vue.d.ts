declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
    escapedHref: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<string | undefined>;
    formattedRel: import('../../../vue/dist/vue.esm-bundler.js').ComputedRef<string | undefined>;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
