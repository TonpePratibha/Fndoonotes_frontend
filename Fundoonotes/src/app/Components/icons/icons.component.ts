import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';

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
    console.log(response);
    this.refreshEvent.emit(response);
  })
}

}
