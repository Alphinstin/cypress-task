import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SideMenuService } from '../services/side-menu.service';

@Directive({
  selector: '[sideMenu]',
})
export class SideMenuDirective {
  private listener!: any;
  private trigger: any;
  private subsription!: Subscription;

  @HostListener('window:resize', ['$event']) onWindowResize() {
    if (window.innerWidth > 1023) {
      this.sideMenuService.closeSideMenu();
    }
  }

  constructor(
    private elRef: ElementRef,
    private sideMenuService: SideMenuService,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.subsription = this.sideMenuService.isOpen$.subscribe((val) => {
      if (val) {
        this.renderer.setStyle(
          document.querySelector('body'),
          'overflow',
          'hidden'
        );
        this.renderer.addClass(this.elRef.nativeElement, 'appear');
        this.addClickListener();
      } else {
        this.renderer.setStyle(
          document.querySelector('body'),
          'overflow',
          'auto'
        );
        this.renderer.removeClass(this.elRef.nativeElement, 'appear');
        this.removeClickListener();
        this.listener = undefined;
      }
    });
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

  addClickListener() {
    this.listener = this.renderer.listen(
      'window',
      'click',
      this.handler.bind(this)
    );
  }

  removeClickListener() {
    if (this.listener) {
      this.listener();
    }
  }

  handler(event: any) {
    this.trigger = this.sideMenuService.getTrigger();
    if (
      event.target !== this.trigger &&
      !this.trigger.contains(event.target) &&
      event.target !== this.elRef
    ) {
      this.sideMenuService.closeSideMenu();
    }
  }
}

@Directive({
  selector: '[sideMenuTrigger] ',
  exportAs: 'sidemenutrigger',
})
export class SideMenuTriggerDirective {
  isOpen: boolean = false;
  constructor(
    private elRef: ElementRef,
    private sideMenuService: SideMenuService
  ) {
    this.sideMenuService.setTrigger(this.elRef.nativeElement);
  }

  @HostListener('click') onTriggerClicked() {
    this.isOpen = this.sideMenuService.toggleSideMenu();
  }
}
