import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
RegisterForm!:FormGroup;
 constructor(private user:UserService,private formbuilder:FormBuilder,private router:Router,private snackbar:MatSnackBar){}
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
      this.router.navigate(['/login']);
      this.snackbar.open('User Registered Successfully!', 'Close', {
        duration: 1000,
        panelClass: ['success-snackbar']
      });

    },
    error: (err) => {
      console.error(" Registration Failed:", err);
      
    }
  });
}


}
