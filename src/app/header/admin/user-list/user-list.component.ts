import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from '../../../app.module';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }
  userList = this.userService.GetAllUsers();

  ShowUserDetails(user: User){
    this.userService.OnShowUserDetails(user);
  }
}