import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { RefreshService } from '../../Services/Refresh/refresh.service';
interface Note {
  id: number;
  title: string;
  description: string;
  archive: boolean;
  trash: boolean;
  color?: string;
}
@Component({
  selector: 'app-getallnotes',
  standalone: false,
  templateUrl: './getallnotes.component.html',
  styleUrl: './getallnotes.component.scss'
})


export class GetallnotesComponent implements OnInit {
notesArray:any;
token:any;

constructor(private notes:NotesService){
  this.token = localStorage.getItem('token');
}

ngOnInit(): void {
  this.onSubmit();
 
}


onSubmit()
{
 
  this.notes.getNotes().subscribe((response:any)=>{
    console.log(response);
    this.notesArray=response;
    console.log("stored to array variable")
    console.log(this.notesArray);
    this.notesArray.reverse()
 
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.trash===false;

    })
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.archive===false;
    })
    
  })
}

receiveMessagefromdisplaycard($event: any) {
  console.log('insidegetallnotes', $event);
  this.onSubmit();
}

// receivedrefreshEventFromDisplytogetall($event:any){
//   console.log("disply to getallnotes"+$event)
//   this.onSubmit();
// }
// receiverRefreshEventCreate($event:any){
//   console.log("create to getallnotes"+$event)
//   this.onSubmit();
// }

// receivedRefreshEvent($event: any) {
//   console.log("refresh from display", $event);

//   this.notesArray = this.notesArray.filter((note: Note) => note.id !== Number($event));


// }


}