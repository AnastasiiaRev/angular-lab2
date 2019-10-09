import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from './models/user.model';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {
  @ViewChild('profile', { static: false })
  profileComponent: ProfileComponent;

  userName: string;
  user: User;
  isLoggedIn = true;
  articles: any[] = [
    {name: 'article1', createdOn: new Date()},
    {name: 'article2', createdOn: new Date(2018, 9, 11)},
    {name: 'article3', createdOn: new Date(2019, 4, 1)}];
  //articles: string[] = [];

  constructor() { }

  ngOnInit() {
    this.userName = this.getUserName();
    this.user = new User(this.userName, 12);
  }

  getUserName() {
    return 'World';
  }

  onLogout(isLoggedOut: boolean) {
    // debugger;
    alert('User has been logout');
    this.user.age = null;
    this.user.name = null;
    this.isLoggedIn =  false;
  }
}
