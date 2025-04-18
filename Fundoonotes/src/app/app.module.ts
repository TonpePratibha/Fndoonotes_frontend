

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MessangerComponent } from './Components/messanger/messanger.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import { provideHttpClient } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotesComponent } from './Components/notes/notes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatMenuModule} from '@angular/material/menu';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe } from './Pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DataBindingComponent,
    MessangerComponent,
    DashboardComponent,
    NotesComponent,
    TrashComponent,
    ArchiveComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdatenoteComponent,
 
    FilterPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  

    
  ],
  providers: [provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
