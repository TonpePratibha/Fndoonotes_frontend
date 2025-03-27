import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NotesService } from '../../Services/Notes/notes.service';
@Component({
  selector: 'app-displaynotes',
  standalone: false,
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent  {
@Input() notesList:any[]=[];

constructor(public dialog:MatDialog,public notes:NotesService){}
ngOnInit() {
  console.log('Notes List:', this.notesList);
}

editnoteDialogbox(notes:any){
  const dialogbox=this.dialog.open(UpdatenoteComponent,{
    width:'40%',
    height:'auto',
    data:notes
  })
  dialogbox.afterClosed().subscribe(result=>{
    console.log(result);
    
  })
}

// refreshNotes() {
//   // Call your API again to fetch updated notes
//   this.notes.getNotes().subscribe((data) => {
//     this.notesList = data;
//   });
// }



}
