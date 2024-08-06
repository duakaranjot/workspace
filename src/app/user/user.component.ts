//import { Component, computed, OnInit,signal} from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User =  {
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;

  @Input({ required: true }) user!:User ;
  @Output() select = new EventEmitter<string>();
  @Input() selected!:boolean;

  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  //  get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  //or

  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //  this.selectedUser.set(DUMMY_USERS[randomIndex]) ;

  // }

  constructor() {}

  ngOnInit(): void {}
}
