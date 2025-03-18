import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
// loginForm!:FormGroup;
// constructor(private user:UserService,private formbuilder:FormBuilder){}
//   ngOnInit(): void {
//     this.loginForm=this.formbuilder.group({
// email:[''],
// password:['']

//     })
//   }

//   Login(){
//   let reqData={
// email:this.loginForm.value.email,
// password:this.loginForm.value.password

//   }
//   this.user.Login(reqData).subscribe((res:any)=>{
// console.log(res);

//   })

//   }


loginForm!: FormGroup;

  constructor(private user: UserService, private formbuilder: FormBuilder) {}

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
        },
        (error) => {
          console.error('Login Error:', error); 
        }
      );
    } else {
      console.log("Form is invalid"); 
    }
  }

}
