import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideMenuService {
  private subject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.subject.asObservable();

  private trigger: any;

  constructor() {}

  openSideMenu() {
    this.subject.next(true);
  }

  closeSideMenu() {
    this.subject.next(false);
  }

  toggleSideMenu() {
    let open = this.subject.getValue();
    this.subject.next(!open);
    // console.log(!open);
    return !open;
  }

  setTrigger(trigger: any) {
    this.trigger = trigger;
  }

  getTrigger() {
    return this.trigger;
  }
}
