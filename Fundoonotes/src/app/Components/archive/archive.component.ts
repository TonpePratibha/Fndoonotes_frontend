import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';


@Component({
  selector: 'app-archive',
  standalone: false,
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {

  archievList:any
  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.notes.getNotes().subscribe((response:any)=>{
      this.archievList=response
      this.archievList=this.archievList.filter((object:any)=>{
        return object.archive==true && object.trash==false;
      

      })
      
      console.log(this.archievList)
      
    })
  }

}
