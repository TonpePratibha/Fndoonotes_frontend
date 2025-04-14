import { Component } from '@angular/core';
import { DataserviceService } from '../../Services/DataService/dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LayoutService } from '../../Services/Layout/layout.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedItem: string = 'notes';  
  isGridView: boolean = true;

constructor(private data:DataserviceService,private snackBar:MatSnackBar,private router:Router,private layoutservice:LayoutService){}

  selectItem(item: string) {
    this.selectedItem = item;
  }

  search(event:any)
  {console.log(event.target.value)
    this.data.outgoingData(event.target.value);
  }
  
  logout() {
    localStorage.clear(); // or remove just the token with: localStorage.removeItem('token');
    this.snackBar.open('Logged out successfully', 'Close', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
    this.router.navigate(['/login']);
  }

  OnLogout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
    this.snackBar.open("Logout Successful",'',{duration: 3000});
  }

  isRotating = false;

refresh() {
  this.isRotating = true;

  // your refresh logic here...

  setTimeout(() => {
    this.isRotating = false;
  }, 500); // same duration as animation
}





toggleGridView() {
  this.isGridView = !this.isGridView;
  this.layoutservice.setGridView(this.isGridView);
}

}
