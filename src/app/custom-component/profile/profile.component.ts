import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  user: User = new User('nan', 0);

  @Output()
  onlogout: EventEmitter<boolean> = new EventEmitter<boolean>();

  isCustomProfile = false;

  constructor() { }

  onLogoutClicked() {
    this.onlogout.emit(true);
  }

  customize() {
    this.isCustomProfile = true;
  }

}
