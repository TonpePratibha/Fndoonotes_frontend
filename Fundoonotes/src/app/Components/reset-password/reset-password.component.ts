// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reset-password',
//   standalone: false,
//   templateUrl: './reset-password.component.html',
//   styleUrl: './reset-password.component.scss'
// })
// export class ResetPasswordComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../../Services/User/user.service';  // Assuming this service exists
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-reset-password',
//   standalone: false,
//   templateUrl: './reset-password.component.html',
//   styleUrl: './reset-password.component.scss'
// })
// export class ResetPasswordComponent implements OnInit {
//   resetPasswordForm!: FormGroup;
//   token: string | null = '';

//   constructor(
//     private formBuilder: FormBuilder,
//     private userService: UserService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private snackbar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     // Capture the token from URL
//     this.route.queryParams.subscribe(params => {
//       this.token = params['token'];  // Assuming the token is passed as a query param
//     });

//     // Initialize form
//     this.resetPasswordForm = this.formBuilder.group({
//       newPassword: ['', [Validators.required, Validators.minLength(8)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
//     }, { 
//       validators: this.passwordMatchValidator 
//     });
//   }

//   // Validator to check if password and confirmPassword are the same
//   passwordMatchValidator(group: FormGroup) {
//     const password = group.get('newPassword')?.value;
//     const confirmPassword = group.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

 

//   resetPassword(): void {
//     if (this.resetPasswordForm.invalid) {
//       this.snackbar.open('Please fill out the form correctly', 'Close', {
//         duration: 2000,
//       });
//       return;
//     }
  
//     const newPassword = this.resetPasswordForm.value.newPassword;
  
//     const resetData = {
//       token: this.token,
//       newPassword: newPassword
//     };
  
//     this.userService.ResetPassword(resetData).subscribe({
//       next: (res) => {
//         this.snackbar.open('Password reset successful', 'Close', {
//           duration: 2000,
//         });
//         this.router.navigate(['/login']);
//       },
//       error: (err) => {
//         this.snackbar.open('Failed to reset password. Try again later.', 'Close', {
//           duration: 2000,
//         });
//       }
//     });
//   }
  
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../../Services/User/user.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-reset-password',
//   standalone:false,
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.scss']
// })
// export class ResetPasswordComponent implements OnInit {
//   resetPasswordForm!: FormGroup;
//   token: string | null = '';

//   constructor(
//     private formBuilder: FormBuilder,
//     private userService: UserService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private snackbar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     // Capture token from query params
//     this.route.queryParams.subscribe(params => {
//       this.token = params['token'];
//     });

//     // Initialize the form
//     this.resetPasswordForm = this.formBuilder.group({
//       newPassword: ['', [Validators.required, Validators.minLength(8)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
//     }, {
//       validators: this.passwordMatchValidator
//     });
//   }

//   // Custom validator to match passwords
//   passwordMatchValidator(group: FormGroup) {
//     const password = group.get('newPassword')?.value;
//     const confirmPassword = group.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

 

//   resetPassword(): void {
//     if (this.resetPasswordForm.invalid || !this.token) {
//       this.snackbar.open('Please fill out the form correctly', 'Close', {
//         duration: 2000,
//       });
//       return;
//     }
  
//     const resetData = {
//       token: this.token,  // ✅ Required by backend in BODY
//       newPassword: this.resetPasswordForm.value.newPassword
//     };
  
//     this.userService.ResetPassword(resetData).subscribe({
//       next: () => {
//         this.snackbar.open('Password reset successful', 'Close', {
//           duration: 2000,
//         });
//         this.router.navigate(['/login']);
//       },
//       error: (err) => {
//         this.snackbar.open('Failed to reset password. Try again later.', 'Close', {
//           duration: 2000,
//         });
//         console.error(err);
//       }
//     });
//   }
  

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  standalone:false,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // ✅ GET token from query param like: /reset-password?token=abc123
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
      console.log('Token from route:', this.token); // ✅ should now log the token
    });
  
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.passwordMatchValidator });
  }
    

 
  

  // ✅ Custom validator
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }


  // resetPassword(): void {
  //   if (this.resetPasswordForm.invalid) {
  //     this.snackbar.open('Please fill out the form correctly', 'Close', {
  //       duration: 2000,
  //     });
  //     return;
  //   }
  
  //   const newPassword = this.resetPasswordForm.value.newPassword;
  //   const resetData = { newPassword: newPassword };
  
  //   if (!this.token) {
  //     this.snackbar.open('Token is missing', 'Close', { duration: 2000 });
  //     return;
  //   }
  
  //   this.userService.ResetPassword(resetData, this.token).subscribe({
  //     next: (res) => {
  //       this.snackbar.open('Password reset successful', 'Close', {
  //         duration: 2000,
  //       });
  //       this.router.navigate(['/login']);
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       this.snackbar.open('Failed to reset password. Try again later.', 'Close', {
  //         duration: 2000,
  //       });
  //     }
  //   });
  // }
  

  resetPassword(): void {
    if (this.resetPasswordForm.invalid) {
      this.snackbar.open('Please fill out the form correctly', 'Close', {
        duration: 2000,
      });
      return;
    }
  
    const newPassword = this.resetPasswordForm.value.newPassword;
    const resetData = { newPassword: newPassword };
  
    if (!this.token) {
      this.snackbar.open('Token is missing in URL', 'Close', { duration: 2000 });
      return;
    }
  
    this.userService.ResetPassword(resetData, this.token).subscribe({
      next: (res) => {
        this.snackbar.open('Password reset successful', 'Close', {
          duration: 2000,
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Reset error:', err);
        this.snackbar.open('Reset failed. Try again.', 'Close', {
          duration: 2000,
        });
      }
    });
  }
  
}  
