import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-getallnotes',
  standalone: false,
  templateUrl: './getallnotes.component.html',
  styleUrl: './getallnotes.component.scss'
})
export class GetallnotesComponent implements OnInit {
notesArray:any;
constructor(private notes:NotesService){}
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
 
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.trash==false;

    })
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.archive==false;
    })
    // this.notesArray.reverse()
  })
}


receivedrefreshEventFromDisplytogetall($event:any){
  console.log("disply to getallnotes"+$event)
  this.onSubmit();
}
receiverRefreshEventCreate($event:any){
  console.log("create to getallnotes"+$event)
  this.onSubmit();
}
receivedRefreshEvent($event: any) {
  console.log("display to getallnotes", $event);
  this.onSubmit();
}

}