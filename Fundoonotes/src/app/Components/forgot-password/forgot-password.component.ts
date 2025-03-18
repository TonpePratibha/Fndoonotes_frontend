import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm!:FormGroup;
  constructor(private user:UserService,private formBuilder:FormBuilder){}

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

     this.user.Forgot(reqData).subscribe(
  (res:any)=>{
    console.log("resetlink sent",res);

  }
)


  }

}
