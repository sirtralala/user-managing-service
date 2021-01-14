import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UsersService } from '../.././users.service';
import { User } from '../.././types';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css']
})

export class UsersListComponent implements OnInit, OnChanges {
  searchText: string;
  userList: User[];
  activeSortArrow: number = 0;
  @Output() select = new EventEmitter<number>();
  @Input() darkmode: boolean;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(): void {}

  refresh(): void {
    this.usersService.retrieveAll()
      .then(userList => this.userList = userList);
  }

  addUser(): void {
    this.select.emit();
  }

  editUser(user: User): void {
    this.select.emit(user.id);
  }

  deleteUser(user: User): void {
    if (confirm('Should the user really be deleted?')) {
      this.usersService.delete(user.id)
        .then(() => this.refresh());
    }
  }

  sort(property, type, arrowNumber) {
    this.activeSortArrow = arrowNumber;
    var sortList = this.userList.sort(this.sortByProperty(property, type));
  }

  sortByProperty(property, type) {
    if (type == "asc") {
      return (a, b) => {
        if (a[property] > b[property]) {
          return 1;
        }
        else if (a[property] < b[property]) {
          return -1;
        }
        return 0;
      }
    }

    if (type == "desc") {
      return (a, b) => {
        if (b[property] > a[property]) {
          return 1;
        }
        else if (b[property] < a[property]) {
          return -1;
        }
        return 0;
      }
    }
  }
}