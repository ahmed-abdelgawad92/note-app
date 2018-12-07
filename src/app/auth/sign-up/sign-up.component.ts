import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  genders = ['male','female'];
  signupForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null,[ Validators.required, Validators.minLength(3)], this.forbiddenUsername),
      'lname': new FormControl(null, Validators.required),
      'fname': new FormControl(null, Validators.required),
      'passwordGroup': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
        'repassword': new FormControl(null, [Validators.required, Validators.minLength(8)])
      }, this.confirmPassword.bind(this)),
      'gender': new FormControl('male', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.authService.signUp(this.signupForm.value).subscribe(
      (response) => {
        console.log(response.json());
      }
    );
  }

  confirmPassword(pass: FormGroup): {[s: string]: boolean}{
    return pass.value.password === pass.value.repassword ? null : {'unmatchedPasswords': true};
  }
  
  forbiddenUsername(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value==="a7a")
          resolve({'forbiddenUsername': true});
        else 
          resolve(null);
      },1500);
    });
    return promise;
  }
}
