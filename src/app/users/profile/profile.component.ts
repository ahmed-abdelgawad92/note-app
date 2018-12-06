import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService , private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.userService.getUser(params['id']).subscribe(
          (user: User) => this.user = user
        )
      }
    );
  }

}
