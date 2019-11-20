import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[flex]"
})
export class FlexDirective implements OnInit {
    @HostBinding("style.display")
    display: string = "flex";

    @HostBinding("class.fx-d-row") isFxdrow: boolean;
    @HostBinding("class.fx-d-column") isFxdcolumn: boolean;
    @Input() flexDirection: string;

    @HostBinding("class.fx-jc-sb") isFxjcsb: boolean;
    @HostBinding("class.fx-jc-sa") isFxjcsa: boolean;
    @HostBinding("class.fx-jc-fe") isFxjcfe: boolean;
    @HostBinding("class.fx-jc-fs") isFxjcfs: boolean;
    @HostBinding("class.fx-jc-c") isFxjcc: boolean;
    @HostBinding("class.fx-jc-se") isFxjcse: boolean;
    @Input() justifyContent: string;

    @HostBinding("class.fx-ai-s") isFxais: boolean;
    @HostBinding("class.fx-ai-fs") isFxaifs: boolean;
    @HostBinding("class.fx-ai-fe") isFxaife: boolean;
    @HostBinding("class.fx-ai-c") isFxaic: boolean;
    @Input() alignItems: string;

    @HostBinding("class.fx-ac-sb") isFxacsb: boolean;
    @HostBinding("class.fx-ac-sa") isFxacsa: boolean;
    @HostBinding("class.fx-ac-fe") isFxacfe: boolean;
    @HostBinding("class.fx-ac-fs") isFxacfs: boolean;
    @HostBinding("class.fx-ac-c") isFxacc: boolean;
    @HostBinding("class.fx-ac-se") isFxacse: boolean;
    @Input() alignContent: string;

    @HostBinding("class.fx-as-a") isFxasa: boolean;
    @HostBinding("class.fx-as-fs") isFxasfs: boolean;
    @HostBinding("class.fx-as-fe") isFxasfe: boolean;
    @HostBinding("class.fx-as-c") isFxasc: boolean;
    @HostBinding("class.fx-as-b") isFxasb: boolean;
    @HostBinding("class.fx-as-s") isFxass: boolean;
    @Input() alignSelf: string;

    @HostBinding("class.fx-fw-n") isFxfwn: boolean;
    @HostBinding("class.fx-fw-w") isFxfww: boolean;
    @HostBinding("class.fx-fw-wr") isFxfwwr: boolean;
    @Input() flexWrap: string;

    constructor() {}

    ngOnInit() {
        const directions = {
            row: () => (this.isFxdrow = true),
            column: () => (this.isFxdcolumn = true)
        };

        const justifyContent = {
            "space-between": () => (this.isFxjcsb = true),
            "space-around": () => (this.isFxjcsa = true),
            "flex-end": () => (this.isFxjcfe = true),
            "flex-start": () => (this.isFxjcfs = true),
            "space-evenly": () => (this.isFxjcse = true),
            center: () => (this.isFxjcc = true)
        };

        const alignItems = {
            stretch: () => (this.isFxais = true),
            "flex-start": () => (this.isFxaifs = true),
            "flex-end": () => (this.isFxaife = true),
            center: () => (this.isFxaic = true)
        };

        const alignContent = {
            "space-between": () => (this.isFxacsb = true),
            "space-around": () => (this.isFxacsa = true),
            "flex-end": () => (this.isFxacfe = true),
            "flex-start": () => (this.isFxacfs = true),
            "space-evenly": () => (this.isFxacfs = true),
            center: () => (this.isFxacse = true)
        };

        const alignSelf = {
            auto: () => (this.isFxasa = true),
            "flex-start": () => (this.isFxasfs = true),
            "flex-end": () => (this.isFxasfe = true),
            center: () => (this.isFxasc = true),
            baseline: () => (this.isFxasb = true),
            stretch: () => (this.isFxass = true)
        };

        const flexWrap = {
            nowrap: () => (this.isFxfwn = true),
            wrap: () => (this.isFxfww = true),
            "wrap-reverse": () => (this.isFxfwwr = true)
        };

        if (directions[this.flexDirection]) {
            directions[this.flexDirection]();
        }

        if (justifyContent[this.justifyContent]) {
            justifyContent[this.justifyContent]();
        }

        if (alignItems[this.alignItems]) {
            alignItems[this.alignItems]();
        }

        if (alignContent[this.alignContent]) {
            alignContent[this.alignContent]();
        }

        if (alignSelf[this.alignSelf]) {
            alignSelf[this.alignSelf]();
        }

        if (flexWrap[this.flexWrap]) {
            flexWrap[this.flexWrap]();
        }
    }
}
