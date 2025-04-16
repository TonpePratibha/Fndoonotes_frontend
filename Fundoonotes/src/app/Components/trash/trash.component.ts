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
isLoading: boolean = false;

 @Output() noteRestored = new EventEmitter<void>(); 

 @Output() displaytogetallnotes = new EventEmitter<string>();
constructor(private notes:NotesService,private refreshService:RefreshService){}


ngOnInit(): void {
  this.onSubmit();
  this.refreshService.refresh$.subscribe(() => {
    console.log('Received refresh in TrashComponent');
    this.onSubmit(); 
  });
}
// onSubmit(){
 
  
//     this.notes.getNotes().subscribe((response: any) => {
//       this.trashList = response.data;
//       this.trashList = response.filter((note: any) => note.trash === true);
//     });
  
// }

onSubmit() {
  this.isLoading = true;  // Start the loader
  
  this.notes.getNotes().subscribe({
    next: (response: any) => {
      // Filter out only the notes marked as 'trash' from the response
      this.trashList = response.filter((note: any) => note.trash === true);
    },
    error: (error) => {
      console.error('Error fetching trash notes:', error);
      // You can show an error message to the user here if needed
    },
    complete: () => {
      this.isLoading = false;  // Stop the loader after the request completes
    }
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
  this.noteRestored.emit(); 
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
receiveMessagefromdisplaycard($event: any) {
  console.log('insidegetallnotes', $event);
  this.onSubmit();
}
}
