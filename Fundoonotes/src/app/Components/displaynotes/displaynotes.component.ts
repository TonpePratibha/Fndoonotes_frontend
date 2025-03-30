import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NotesService } from '../../Services/Notes/notes.service';
import { DataserviceService } from '../../Services/DataService/dataservice.service';

@Component({
  selector: 'app-displaynotes',
  standalone: false,
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent  {
@Input() notesList:any[]=[];
filterNote:any;

constructor(public dialog:MatDialog,public notes:NotesService,public data:DataserviceService){}
ngOnInit() {
  console.log('Notes List:', this.notesList);
  this.data.incomingData.subscribe((response)=>{
    console.log("search in process",response)
    this.filterNote=response;
  })

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
