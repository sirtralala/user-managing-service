import { Component, Input } from '@angular/core';
import { UsersService } from '.././users.service';
import { User } from '.././types';

@Component({
  selector: 'app-users',
  template: `
    <h1>User Managing Service</h1>

    <div class="content-users">
      <app-users-list #list (select)="selectUser($event)" [darkmode]="darkmode"></app-users-list>
      <app-users-input [user]="selectedUser" (ok)="list.refresh()" [darkmode]="darkmode"></app-users-input>
    </div>
  `,
  styleUrls: ['users.component.css']
})

export class UsersComponent {
  selectedUser: User;
  @Input() darkmode: boolean;

  constructor(private usersService: UsersService) { }

  selectUser(id: number) {
    if (id) {
      // edit --> retrieve users
      this.usersService.retrieve(id)
        .then(user => this.selectedUser = user);
    }
    else {
      // add --> create new user object
      this.selectedUser = new User();
    }
  }
}
