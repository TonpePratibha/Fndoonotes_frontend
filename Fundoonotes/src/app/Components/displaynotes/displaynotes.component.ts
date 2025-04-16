import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NotesService } from '../../Services/Notes/notes.service';
import { DataserviceService } from '../../Services/DataService/dataservice.service';
import { RefreshService } from '../../Services/Refresh/refresh.service';
import { LayoutService } from '../../Services/Layout/layout.service';

@Component({
  selector: 'app-displaynotes',
  standalone: false,
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent  implements OnInit{
@Input() notesList:any[]=[];
@Input() isGridView: boolean = true;
layoutChosen: boolean = false;
@Input() isLoading: boolean = false;


//@Output() refreshEvent = new EventEmitter<string>(); 
@Output() displaytogetallnotes = new EventEmitter<string>();

//@Output() updateAutoRefresh=new EventEmitter<string>();
filterNote:any;
msg: any;

constructor(public dialog:MatDialog,public notes:NotesService,public data:DataserviceService,private refreshservice:RefreshService,private layoutservice:LayoutService){}
ngOnInit() {
  console.log('Notes List:', this.notesList);
  this.data.incomingData.subscribe((response)=>{
    console.log("search in process",response)
    this.filterNote=response;
  })

 
  this.layoutservice.isGridView$.subscribe((val) => {
    this.isGridView = val;
    this.layoutChosen = true;
  });
  

}

editnoteDialogbox(notes:any){
  const dialogbox=this.dialog.open(UpdatenoteComponent,{
    width:'40%',
    height:'auto',
    data:notes
  })
  dialogbox.afterClosed().subscribe(result=>{
    console.log(result);
    //this.updateAutoRefresh.emit(result);
  })
}


removeNoteFromList(noteId: string) {
  // Update UI
  this.notesList = this.notesList.filter(note => note.id !== Number(noteId));
  // Notify parent to refresh full list if needed
  //this.refreshEvent.emit(noteId);
}

recievefromiconstodisplaycard($event: any) {
  console.log('recievedindisplay', $event);
  this.msg = $event;
  this.displaytogetallnotes.emit(this.msg);
}


}
