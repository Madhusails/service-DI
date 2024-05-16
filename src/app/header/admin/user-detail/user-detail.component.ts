import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  selectedUser?: User;
  userService = inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
    })
  }
}