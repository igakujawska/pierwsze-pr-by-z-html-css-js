import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length) //wylosowanie z listy pojedynczego usera

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    @Input({required: true})) avatar!: string;
    @Input({required: true}) name: string;


  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => '/users/' + this.selectedUser().avatar) 
  //nalezałoby dodac tez do importow obok component - computed, signal

  get imagePath() {
    return '/users/'+ this.avatar
  }

  onSelectUser() {


    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length) 
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
