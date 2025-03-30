import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {



loginForm!: FormGroup;

  constructor(private user: UserService, private formbuilder: FormBuilder,private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Login() {
    if (this.loginForm.valid) {
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      console.log("Login Form Data:", reqData); 

      this.user.Login(reqData).subscribe(
        (res: any) => {
          console.log('Login Success:', res); 
          localStorage.setItem("token",res.token);
          this.snackbar.open("login successful");
        },
        (error) => {
          console.error('Login Error:', error); 
        }
      );
    } else {
      console.log("Form is invalid"); 
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
