import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostBinding
} from "@angular/core";

@Component({
  selector: "ui-box",
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./box.component.scss"]
})
export class BoxComponent implements OnInit {
  @Input() display: string;
  @Input() w: string;
  @Input() h: string;
  @Input() overflow: string;
  @Input() mxh: string;
  @Input() mnh: string;
  @Input() mxw: string;
  @Input() mnw: string;

  @Input() m: string;
  @Input() mt: string;
  @Input() mb: string;
  @Input() ml: string;
  @Input() mr: string;

  @Input() p: string;
  @Input() pt: string;
  @Input() pb: string;
  @Input() pl: string;
  @Input() pr: string;
  @Input() b: string;
  @Input() bt: string;
  @Input() bb: string;
  @Input() bl: string;
  @Input() br: string;

  @Input() flexBasis: string;
  @Input() flexs: string;
  @Input() flexGrow: string;
  @Input() flexShrink: string;
  @Input() order: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.display) {
      this.el.nativeElement.style.display = this.display;
    }

    if (this.w) {
      this.el.nativeElement.style.width = this.w;
    }

    if (this.h) {
      this.el.nativeElement.style.height = this.h;
    }

    if (this.mxh) {
      this.el.nativeElement.style.maxHeight = this.mxh;
    }

    if (this.mnh) {
      this.el.nativeElement.style.minHeight = this.mnh;
    }

    if (this.mxw) {
      this.el.nativeElement.style.maxWidth = this.mxw;
    }

    if (this.mnw) {
      this.el.nativeElement.style.minWidth = this.mnw;
    }

    if (this.overflow) {
      this.el.nativeElement.style.overflow = this.overflow;
    }

    if (this.m) {
      this.el.nativeElement.style.margin = this.m;
    }

    if (this.mt) {
      this.el.nativeElement.style.marginTop = this.mt;
    }

    if (this.mb) {
      this.el.nativeElement.style.marginBottom = this.mb;
    }

    if (this.mr) {
      this.el.nativeElement.style.marginLeft = this.ml;
    }

    if (this.ml) {
      this.el.nativeElement.style.marginLeft = this.ml;
    }

    if (this.p) {
      this.el.nativeElement.style.padding = this.p;
    }

    if (this.pt) {
      this.el.nativeElement.style.paddingTop = this.pt;
    }

    if (this.pb) {
      this.el.nativeElement.style.paddingBottom = this.pb;
    }

    if (this.pr) {
      this.el.nativeElement.style.paddingRight = this.pr;
    }

    if (this.pl) {
      this.el.nativeElement.style.paddingLeft = this.pl;
    }

    if (this.b) {
      this.el.nativeElement.style.border = this.b;
    }

    if (this.bt) {
      this.el.nativeElement.style.borderTop = this.bt;
    }

    if (this.bb) {
      this.el.nativeElement.style.borderBottom = this.bb;
    }

    if (this.br) {
      this.el.nativeElement.style.borderRight = this.br;
    }

    if (this.bl) {
      this.el.nativeElement.style.borderLeft = this.bl;
    }

    if (this.flexBasis) {
      this.el.nativeElement.style.flexBasis = this.flexBasis;
    }

    if (this.flexs) {
      this.el.nativeElement.style.flex = this.flexs;
    }

    if (this.flexGrow) {
      this.el.nativeElement.style.flexGrow = this.flexGrow;
    }

    if (this.flexShrink) {
      this.el.nativeElement.style.flexShrink = this.flexShrink;
    }

    if (this.order) {
      this.el.nativeElement.style.flexShrink = this.order;
    }
  }
}
