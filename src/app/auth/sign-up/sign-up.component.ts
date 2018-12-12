import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ParentErrorStateMatcher } from 'src/app/shared/parent-state-matcher';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  loading= false;
  genders = ['male','female'];
  signupForm: FormGroup;
  matcher = new ParentErrorStateMatcher();
  alertDanger = true;
  alertSuccess = true;
  alertContent = '';
  constructor(private authService: AuthService, 
              public snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null,[ Validators.required, Validators.minLength(3), Validators.email]),
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
    if(!this.signupForm.invalid){
      this.loading = true;
      this.authService.signUp(this.signupForm.value).subscribe(
        (data) => {
          console.log(data);
          if(data['success']){
            this.alertSuccess = false;
            this.alertContent = data['success'];
            setTimeout(() => {
              this.router.navigate(['login']);
            },1000);
          }else{
            if(data['error']){
              this.alertDanger = false;
              this.alertContent = data['error'];
            }
            this.signupForm.controls['email'].setErrors(this.backEndErrorHandler(data['email']));           
            this.signupForm.controls['fname'].setErrors(this.backEndErrorHandler(data['fname']));
            this.signupForm.controls['lname'].setErrors(this.backEndErrorHandler(data['lname']));
            this.signupForm.get('passwordGroup.password').setErrors(this.backEndErrorHandler(data['passwordGroup.password']));
            this.signupForm.get('passwordGroup.repassword').setErrors(this.backEndErrorHandler(data['passwordGroup.repassword']));
            this.signupForm.controls['gender'].setErrors(this.backEndErrorHandler(data['gender']));
            this.loading = false;
          }
        }
        );
    }
  }
  confirmPassword(pass: FormGroup): {[s: string]: boolean}{
    return pass.value.password === pass.value.repassword ? null : { 'unmatchedPasswords': true };
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
  backEndErrorHandler(errors){
    return (errors == null) ? null : { backEndErrors: errors};
  }
}
