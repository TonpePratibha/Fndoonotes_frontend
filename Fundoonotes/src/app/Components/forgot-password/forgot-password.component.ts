import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm!:FormGroup;
  constructor(private user:UserService,private formBuilder:FormBuilder,private snackbar:MatSnackBar){}

  submited=false;
  
  ngOnInit(): void {
    this.ForgotForm=this.formBuilder.group({

      email:['']
    });
    
  }

  Forgot(){
     this.submited=true;
     let reqData={
     email:this.ForgotForm.value.email


     };
     console.log(reqData);

     this.user.Forgot(reqData).subscribe((res:any)=>{
    console.log("resetlink sent",res);
   
    this.snackbar.open('email sent', 'Close', {
      duration: 1000,
    });
  }
 
)


  }



}
