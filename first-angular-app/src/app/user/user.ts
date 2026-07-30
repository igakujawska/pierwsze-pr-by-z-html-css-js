import { Component, computed, input, output } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users'; //w ramach cwiczenia
//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length) //wylosowanie z listy pojedynczego usera
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => '/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
// @Input({required: true}) avatar!: string;
// @Input({required: true}) name!: string;
//@Output() select = new EventEmitter();

// selectedUser = signal(DUMMY_USERS[randomIndex]);

// get imagePath() {
//   return '/users/'+ this.avatar }

// const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
// this.selectedUser.set(DUMMY_USERS[randomIndex])
