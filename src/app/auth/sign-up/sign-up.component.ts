import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  genders = ['male','female'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null,[ Validators.required, Validators.minLength(3)]),
      'lname': new FormControl(null, Validators.required),
      'fname': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'repassword': new FormControl(null, Validators.required),
      'gender': new FormControl('male', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
