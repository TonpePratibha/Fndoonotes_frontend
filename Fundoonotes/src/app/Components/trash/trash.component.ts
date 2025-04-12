import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { RefreshService } from '../../Services/Refresh/refresh.service';


@Component({
  selector: 'app-trash',
  standalone: false,
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit{
trashList:any[]=[];

// @Output() noteRestored = new EventEmitter<void>(); 
constructor(private notes:NotesService,private refreshService:RefreshService){}

// ngOnInit(): void {
//   this.onSubmit()
// }

ngOnInit(): void {
  this.onSubmit();
  this.refreshService.refresh$.subscribe(() => {
    console.log('Received refresh in TrashComponent');
    this.onSubmit(); // 🧠 this will be called when note is trashed
  });
}
onSubmit(){
  // this.notes.getNotes().subscribe((response:any)=>{
  //   console.log(response)
  //   this.trashList=response
  //   this.trashList=this.trashList.filter((object:any)=>{
  //     return object.trash==true;
  //   })
  // })
 
    this.notes.getNotes().subscribe((response: any) => {
      this.trashList = response.filter((note: any) => note.trash === true);
    });
  
}
restore(notes:any){
let reqData={
  id:notes.id
}
console.log(reqData)
this.notes.trashNotes(reqData).subscribe((response:any)=>{
  console.log(response)
  this.trashList = this.trashList.filter((obj: any) => obj.id !== notes.id);
  //this.noteRestored.emit(); 
})

}

deleteNote(note: any) {
  let reqData = { id: note.id };
  console.log('Deleting:', reqData);
  this.notes.deleteNote(reqData).subscribe({
    next: (response: any) => {
      console.log('Deleted:', response);
      this.trashList = this.trashList.filter((obj: any) => obj.id !== note.id);
    },
    error: (err: any) => {
      console.error('Delete failed:', err);
    }
  });
}

}
