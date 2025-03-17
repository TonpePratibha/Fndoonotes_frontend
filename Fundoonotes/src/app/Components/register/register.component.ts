import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
RegisterForm!:FormGroup;
 constructor(private user:UserService,private formbuilder:FormBuilder){}
 ngOnInit(): void {
   this.RegisterForm=this.formbuilder.group({
    name:[''],
    email:[''],
    password:[''],
    city:[''],
    phone:['']
   })
 }



Register() {
  let reqData = {
    name: this.RegisterForm.value.name,
    email: this.RegisterForm.value.email,
    password: this.RegisterForm.value.password,
    city: this.RegisterForm.value.city,
    phone: this.RegisterForm.value.phone,
  };

  this.user.Register(reqData).subscribe({
    next: (res) => {
      console.log("Registration Successful:", res);
      alert("User Registered Successfully!");
    },
    error: (err) => {
      console.error(" Registration Failed:", err);
      alert("Error in Registration: " + err.message);
    }
  });
}


}
