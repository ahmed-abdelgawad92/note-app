import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) =>  {
      console.log(users);
    });
  }
  refreshToken(){
    this.userService.refreshToken().subscribe(
      (data) => console.log(data)
      
    );
  }
  
}
