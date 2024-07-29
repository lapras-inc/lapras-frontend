declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    filterBackground: {
        type: StringConstructor;
        default: string;
    };
    hasClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    close: null;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    filterBackground: {
        type: StringConstructor;
        default: string;
    };
    hasClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    filterBackground: string;
    hasClose: boolean;
    panel: boolean;
    gutter: number;
    zIndex: number;
}, {}>;
export default _default;
