import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (response) => {
        let data = response.json();
        this.users = <User[]>data;
        console.log(this.users);
        console.log(typeof this.users);
      },
      (error) => console.log(error)
    );
  }

}
