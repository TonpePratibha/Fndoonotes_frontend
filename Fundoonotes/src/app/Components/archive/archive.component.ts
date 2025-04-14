// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { NotesService } from '../../Services/Notes/notes.service';


// @Component({
//   selector: 'app-archive',
//   standalone: false,
//   templateUrl: './archive.component.html',
//   styleUrl: './archive.component.scss'
// })
// export class ArchiveComponent implements OnInit {

//   archievList:any
//   constructor(private notes:NotesService){}
//   ngOnInit(): void {
//     this.onSubmit()
//   }
//   onSubmit(){
//     this.notes.getNotes().subscribe((response:any)=>{
//       this.archievList=response
//       this.archievList=this.archievList.filter((object:any)=>{
//         return object.archive==true && object.trash==false;
      

//       })
      
//       console.log(this.archievList)
      
//     })
//   }

// }

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { RefreshService } from '../../Services/Refresh/refresh.service';


@Component({
  selector: 'app-archive',
  standalone:false,
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archievList: any[] = [];
  token:any;
  @Output() displaytogetallnotes = new EventEmitter<string>();
  constructor(private notes: NotesService) { this.token = localStorage.getItem('token');}

  ngOnInit(): void {
    this.getArchiveNotes();
   
  }

  getArchiveNotes() {
   
    this.notes.getNotes().subscribe((response: any) => {
      this.archievList = response.filter((note: any) =>
        note.archive === true && note.trash === false
      );
    });
  }
 

  receiveMessagefromdisplaycard($event: any) {
    console.log('insidegetallnotes', $event);
    this.getArchiveNotes();
  }
  
  // removeNoteFromList(noteId: string) {
  //   this.archievList = this.archievList.filter(note => note.id !== Number(noteId));
  // }
  
}

