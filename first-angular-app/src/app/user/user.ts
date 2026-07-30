import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length) //wylosowanie z listy pojedynczego usera

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    // @Input({required: true}) avatar!: string;
    // @Input({required: true}) name!: string;
    id = input.required<string>();
    avatar = input.required<string>();
    name = input.required<string>();

    @Output() select = new EventEmitter();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => { return '/users/' + this.avatar() })
  //nalezałoby dodac tez do importow obok component - computed, signal

  // get imagePath() {
  //   return '/users/'+ this.avatar
  // }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length) 
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
