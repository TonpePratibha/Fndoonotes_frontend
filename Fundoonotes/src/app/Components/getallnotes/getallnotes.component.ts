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
 

  })
}

}
