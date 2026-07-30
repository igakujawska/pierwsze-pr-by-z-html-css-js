import { Component, signal, } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    users = DUMMY_USERS;
    selectedUserId='u1';

    get selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId)!;
    }
  //protected readonly title = signal('first-angular-app');
  onSelectUser(id: string){
    this.selectedUserId=id;
  }
}
