import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';
import { ControlContainer } from '@angular/forms';
import { RefreshService } from '../../Services/Refresh/refresh.service';

@Component({
  selector: 'app-icons',
  standalone: false,
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
@Input() notesObject:any
trash: boolean = false;
archieve: boolean = false;
// @Output()refreshEvent=new EventEmitter<string>();
@Output() iconstodisplay = new EventEmitter<string>();


@Input() isCreateMode: boolean = false;

@Output() colorSelected = new EventEmitter<string>();

constructor(private notes:NotesService,private refreshService:RefreshService){}

ngOnInit(): void {
  
}


onTrash() {
  const reqData = { id: this.notesObject.id };
  this.notes.trashNotes(reqData).subscribe((res: any) => {
    console.log('Trashed successfully', res);
   // this.refreshService.triggerRefresh(); 
    this.iconstodisplay.emit(res);
  });
}


// unTrash() {
 

//   const reqData = { id: this.notesObject.id };
//   this.notes.trashNotes(reqData).subscribe((res: any) => {
//     console.log('Trashed successfully', res);
//    // this.refreshService.triggerRefresh(); 
//     this.iconstodisplay.emit(res);
//   });
// }

onArchive() {
  const reqData = { id: this.notesObject.id };
  this.notes.archievNotes(reqData).subscribe((res: any) => {
    console.log('Archived successfully', res);
    //this.refreshService.triggerRefresh(); 
    this.iconstodisplay.emit(res);
  });
}
// unArchive() {
//   const reqData = { id: this.notesObject.id };
//   this.notes.archievNotes(reqData).subscribe((res: any) => {
//     console.log('Archived successfully', res);
//     //this.refreshService.triggerRefresh(); 
//     this.iconstodisplay.emit(res);
//   });
// }


colorArray: Array<any> = [
  { code: '#ffffff', name: 'white' },
  { code: '#FF6347', name: 'Tomato' },
  { code: '#FF4500', name: 'OrangeRed'},
  { code: '#FFFF00', name: 'yellow' },
  { code: '#ADFF2F', name: 'greenyellow' },
  { code: '#B0C4DE', name: 'LightSteelBlue' },
  { code: '#EEE8AA', name: 'PaleGoldenRod' },
  { code: '#7FFFD4', name: 'Aquamarine' },
  { code: '#FFE4C4', name: 'Bisque' },
  { code: '#C0C0C0', name: 'Silver' },
  { code: '#BC8F8F', name: 'RosyBrown' },
  { code: '#D3D3D3', name: 'grey' },
];


selectColor(color: any) {
  if (this.isCreateMode) {
    // In create mode, just emit selected color back to NotesComponent
    this.colorSelected.emit(color.code);
  } else {
    // In update mode, call the API
    let reqData = {
      color: color.code,
      id: this.notesObject.id
    };

    this.notes.notesColor(reqData).subscribe(
      (response: any) => {
        console.log("Color updated successfully", response);
        this.notesObject.color = color.code;
        //this.refreshEvent.emit();
        this.iconstodisplay.emit(response);
      },
      (error) => {
        console.error("Error updating color", error);
      }
    );
  }
}





}
