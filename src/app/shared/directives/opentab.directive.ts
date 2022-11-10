import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideMenuService } from '../services/side-menu.service';

@Directive({
  selector: '[openTab]',
})
export class OpenTabDirective {
  private listener!: any;
  @Output() shouldDisplay = new EventEmitter<any>();
  @Input('trigger') trigger!: any;
  isOpen!: boolean;
  @Input('open') set open(val: boolean) {
    this.isOpen = val;

    this.shouldDisplay.emit(val);

    if (val) {
      this.addClickListener();
      return;
    }
    if (this.listener) {
      this.removeClickListener();
    }
  }
  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (window.innerWidth > 768 && this.isOpen) {
      this.shouldDisplay.emit(false);
    }
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sideMenuService: SideMenuService
  ) {}

  addClickListener() {
    this.listener = this.renderer.listen(
      'window',
      'click',
      this.handler.bind(this)
    );
  }

  removeClickListener() {
    this.listener();
  }

  handler(event: any) {
    if (
      event.target !== this.trigger &&
      !this.trigger.contains(event.target) &&
      event.target !== this.elRef
    ) {
      this.shouldDisplay.emit(false);
    }
  }
}
