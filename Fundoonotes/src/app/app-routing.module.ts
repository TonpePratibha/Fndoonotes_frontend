import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { MessangerComponent } from './Components/messanger/messanger.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotesComponent } from './Components/notes/notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { authGuard } from './Authguard/auth.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'reset/:token', component:ResetPasswordComponent},
  {path:'msg', component:MessangerComponent},
  {path:'data',component:DataBindingComponent},

  {path:'dashboard', component:DashboardComponent, canActivate:[authGuard],
    children:[
      {path:'notes',component:GetallnotesComponent},
      {path:'archive',component:ArchiveComponent},
      {path:'trash',component:TrashComponent}

    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
