import { Component } from '@angular/core';
import { DataserviceService } from '../../Services/DataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectedItem: string = 'notes';  // Default selection

constructor(private data:DataserviceService){}

  selectItem(item: string) {
    this.selectedItem = item;
  }

  search(event:any)
  {console.log(event.target.value)
    this.data.outgoingData(event.target.value);
  }
}
