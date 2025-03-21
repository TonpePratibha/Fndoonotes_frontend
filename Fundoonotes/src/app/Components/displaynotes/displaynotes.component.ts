import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  standalone: false,
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent  {
@Input() notesList:any[]=[];

ngOnInit() {
  console.log('Notes List:', this.notesList);
}
}
