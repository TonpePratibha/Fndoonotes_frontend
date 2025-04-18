import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-updatenote',
  standalone: false,
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit {
  title:any;
  description:any;
  id:any;
  color:any;

 constructor(
  @Inject(MAT_DIALOG_DATA) public data:any,
  public dialogbox:MatDialogRef<UpdatenoteComponent>,
  private notes:NotesService
 ){
  this.title=data.title,
  this.description=data.description,
  this.id=data.id,
  this.color=data.color
  
 
 }
  ngOnInit(): void {
   
 }
 onColorSelected(selectedColor: string) {
  this.color = selectedColor;
}
 closeDialog(){
  let reqData={
  title:this.title,
  description: this.description,
  color: this.color,
  
  }
  this.notes.updateNotes(reqData,this.id).subscribe((response:any)=>{
  console.log(response);
  this.dialogbox.close()
  });
 }



}
