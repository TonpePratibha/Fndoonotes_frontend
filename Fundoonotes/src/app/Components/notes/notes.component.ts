import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
 

  // toggleNote(note: any) {
  //   note.isEditing = !note.isEditing;
  // }

  isExpanded = false;
  note = { title: '', description: '' };

  expandNote() {
    this.isExpanded = true;
  }

  autoResize(event: any) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }
}
