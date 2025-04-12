import { Component } from '@angular/core';
import { DataserviceService } from '../../Services/DataService/dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedItem: string = 'notes';  

constructor(private data:DataserviceService,private snackBar:MatSnackBar,private router:Router){}

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
}
