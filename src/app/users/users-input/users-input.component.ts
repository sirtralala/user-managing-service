import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../.././users.service';
import { User } from '../.././types';

@Component({
  selector: 'app-users-input',
  templateUrl: 'users-input.component.html',
  styleUrls: ['users-input.component.css']
})

export class UsersInputComponent {

  @Input() user: User;
  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() darkmode: boolean;

  constructor(private usersService: UsersService) {}

  finishWithOk(): void {
    if (this.user.firstName && this.user.lastName && this.user.birthdate) {
      this.createOrUpdate()
      .then(
        () => {
          this.ok.emit();
          this.user = null;
        });
    }
    else {
      alert("Please complete all fields!");
    }
  }

  createOrUpdate(): Promise<any> {
    if (this.user.id) {
      // edit --> update user
      return this.usersService.update(this.user);
    }
    else {
      // add --> create user
      return this.usersService.create(this.user);
    }
  }

  finishWithCancel(): void {
    this.cancel.emit();
    this.user = null;
  }
}