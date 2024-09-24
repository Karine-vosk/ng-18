import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
