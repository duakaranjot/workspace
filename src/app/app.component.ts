import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserid?: string;

  get selectedUser() {
    return this.users.find((x) => x.id === this.selectedUserid);
  }

  onSelectUser(id: string) {
    this.selectedUserid = id;
  }
}
