import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-icons',
  standalone: false,
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
@Input() notesObject:any
@Output()refreshEvent=new EventEmitter<string>();

constructor(private notes:NotesService){}

ngOnInit(): void {
  
}
onDelete(){
  let reqData={
    id:this.notesObject.id,
  }
  console.log(reqData)
  console.log("Notes Object: ", this.notesObject);

  this.notes.trashNotes(reqData).subscribe((response:any)=>{
    console.log("note trashed successfully",response);
  })

}



onArchive(){
  let reqData={
    id:this.notesObject.id
  }
  console.log(reqData);
  this.notes.archievNotes(reqData).subscribe((response:any)=>{
    // console.log(response);
    console.log("note tarchived successfully",response);
    //this.refreshEvent.emit(response);
  })
}

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

// selectColor(colors:any){
//   let reqData={
//     color:colors.name,
//    id:this.notesObject.id
//   }
//   this.notes.notesColor(reqData).subscribe((response:any)=>{
//     console.log(response)
//    // this.refreshEvent.emit(response);
   
//   });
  

// }
selectColor(color: any) {
  let reqData = {
    color: color.code, 
    id: this.notesObject.id  // Ensure ID is correct
  };

  this.notes.notesColor(reqData).subscribe(
    (response: any) => {
      console.log("Color updated successfully", response);
      
      // ✅ Update the UI immediately
      this.notesObject.color = color.code;
      
      // ✅ Notify parent to refresh the note list
      this.refreshEvent.emit();
    },
    (error) => {
      console.error("Error updating color", error);
    }
  );
}




}
