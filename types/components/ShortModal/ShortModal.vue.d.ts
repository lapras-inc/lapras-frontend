declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    outerClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: null;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    outerClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    zIndex: number;
    visible: boolean;
    filterBackground: string;
    hasClose: boolean;
    panel: boolean;
    gutter: number;
    closeOnClickOutside: boolean;
    outerClose: boolean;
}, {}, {
    Icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<"search" | "link" | "at" | "file" | "stop" | "view" | "cancel" | "menu" | "circle" | "close" | "home" | "refresh" | "document" | "calendar" | "minus" | "plus" | "tag" | "layout" | "help" | "double-circle" | "cross" | "add-document" | "add-user" | "analytics" | "arrow-down-bold" | "arrow-down" | "arrow-left-double" | "arrow-left" | "arrow-left2" | "arrow-left3" | "arrow-left4" | "arrow-right-double" | "arrow-right" | "arrow-right2" | "arrow-right3" | "arrow-right4" | "arrow-up" | "back-arrow" | "bell" | "briefcase" | "cake" | "check" | "circle-add-button" | "circle-arrow-left" | "circle-arrow-right" | "clock" | "close-bold" | "close-circle" | "comment" | "commits" | "company" | "contributors" | "danger" | "delete-user" | "edit-window" | "electric-ray" | "emotion-frown" | "emotion-normal" | "emotion-smile" | "exclamation" | "external-link" | "eye-close" | "eye" | "forks" | "github" | "heart-full" | "home2" | "icon-picture" | "info" | "info2" | "interview" | "job" | "layout2" | "like-fill" | "like" | "mail-line" | "mail" | "medal" | "memo" | "money" | "more-button-dots" | "note-edit" | "openmail" | "paper" | "paperclip" | "paper-plane" | "parson" | "pencil-circle" | "pencil" | "people" | "people2" | "person-arrow" | "pin" | "placemap" | "profile" | "replymail" | "report-problem" | "row-left-arrow" | "row-right-arrow" | "sendmail" | "setting" | "settings" | "share" | "sort-down" | "square-add-button" | "square-delete-button" | "star-full" | "star-half" | "stock" | "storage-box" | "stylish-plus" | "surprised-bell" | "task-check" | "thumbs-down" | "thumbs-up" | "tray" | "trush" | "unopened" | "balloon" | "lightbulb" | "sword" | "crown" | "sparkle" | "activity" | "interest" | "remote" | "upload-document">;
            required: true;
        };
    }>, {
        iconMap: {
            'add-document': string;
            'add-user': string;
            analytics: string;
            'arrow-down-bold': string;
            'arrow-down': string;
            'arrow-left-double': string;
            'arrow-left': string;
            'arrow-left2': string;
            'arrow-left3': string;
            'arrow-left4': string;
            'arrow-right-double': string;
            'arrow-right': string;
            'arrow-right2': string;
            'arrow-right3': string;
            'arrow-right4': string;
            'arrow-up': string;
            at: string;
            'back-arrow': string;
            bell: string;
            briefcase: string;
            cake: string;
            calendar: string;
            cancel: string;
            check: string;
            'circle-add-button': string;
            'circle-arrow-left': string;
            'circle-arrow-right': string;
            circle: string;
            clock: string;
            'close-bold': string;
            'close-circle': string;
            close: string;
            comment: string;
            commits: string;
            company: string;
            contributors: string;
            cross: string;
            danger: string;
            'delete-user': string;
            document: string;
            'double-circle': string;
            'edit-window': string;
            'electric-ray': string;
            'emotion-frown': string;
            'emotion-normal': string;
            'emotion-smile': string;
            exclamation: string;
            'external-link': string;
            'eye-close': string;
            eye: string;
            file: string;
            forks: string;
            github: string;
            'heart-full': string;
            help: string;
            home: string;
            home2: string;
            'icon-picture': string;
            info: string;
            info2: string;
            interview: string;
            job: string;
            layout: string;
            layout2: string;
            'like-fill': string;
            like: string;
            link: string;
            'mail-line': string;
            mail: string;
            medal: string;
            memo: string;
            menu: string;
            money: string;
            'more-button-dots': string;
            'note-edit': string;
            openmail: string;
            paper: string;
            paperclip: string;
            'paper-plane': string;
            parson: string;
            'pencil-circle': string;
            pencil: string;
            people: string;
            people2: string;
            'person-arrow': string;
            pin: string;
            placemap: string;
            plus: string;
            minus: string;
            profile: string;
            refresh: string;
            replymail: string;
            'report-problem': string;
            'row-left-arrow': string;
            'row-right-arrow': string;
            search: string;
            sendmail: string;
            setting: string;
            settings: string;
            share: string;
            'sort-down': string;
            'square-add-button': string;
            'square-delete-button': string;
            'star-full': string;
            'star-half': string;
            stock: string;
            stop: string;
            'storage-box': string;
            'stylish-plus': string;
            'surprised-bell': string;
            tag: string;
            'task-check': string;
            'thumbs-down': string;
            'thumbs-up': string;
            tray: string;
            trush: string;
            unopened: string;
            view: string;
            balloon: string;
            lightbulb: string;
            sword: string;
            crown: string;
            sparkle: string;
            activity: string;
            interest: string;
            remote: string;
            'upload-document': string;
        };
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<"search" | "link" | "at" | "file" | "stop" | "view" | "cancel" | "menu" | "circle" | "close" | "home" | "refresh" | "document" | "calendar" | "minus" | "plus" | "tag" | "layout" | "help" | "double-circle" | "cross" | "add-document" | "add-user" | "analytics" | "arrow-down-bold" | "arrow-down" | "arrow-left-double" | "arrow-left" | "arrow-left2" | "arrow-left3" | "arrow-left4" | "arrow-right-double" | "arrow-right" | "arrow-right2" | "arrow-right3" | "arrow-right4" | "arrow-up" | "back-arrow" | "bell" | "briefcase" | "cake" | "check" | "circle-add-button" | "circle-arrow-left" | "circle-arrow-right" | "clock" | "close-bold" | "close-circle" | "comment" | "commits" | "company" | "contributors" | "danger" | "delete-user" | "edit-window" | "electric-ray" | "emotion-frown" | "emotion-normal" | "emotion-smile" | "exclamation" | "external-link" | "eye-close" | "eye" | "forks" | "github" | "heart-full" | "home2" | "icon-picture" | "info" | "info2" | "interview" | "job" | "layout2" | "like-fill" | "like" | "mail-line" | "mail" | "medal" | "memo" | "money" | "more-button-dots" | "note-edit" | "openmail" | "paper" | "paperclip" | "paper-plane" | "parson" | "pencil-circle" | "pencil" | "people" | "people2" | "person-arrow" | "pin" | "placemap" | "profile" | "replymail" | "report-problem" | "row-left-arrow" | "row-right-arrow" | "sendmail" | "setting" | "settings" | "share" | "sort-down" | "square-add-button" | "square-delete-button" | "star-full" | "star-half" | "stock" | "storage-box" | "stylish-plus" | "surprised-bell" | "task-check" | "thumbs-down" | "thumbs-up" | "tray" | "trush" | "unopened" | "balloon" | "lightbulb" | "sword" | "crown" | "sparkle" | "activity" | "interest" | "remote" | "upload-document">;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
