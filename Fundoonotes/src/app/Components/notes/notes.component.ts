import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit{
 

  isExpanded = false;
  NotesForm!: FormGroup;
  display = false;

  constructor(private formbuilder: FormBuilder, private notesService: NotesService) {}

  ngOnInit(): void {
    this.NotesForm = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  expandNote() {
    this.isExpanded = true;
  }

  autoResize(event: any) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }

  onSubmit() {
    if (this.NotesForm.invalid) {
      return;
    }

    let reqData = {
      title: this.NotesForm.value.title,
      description: this.NotesForm.value.description
    };

    console.log(reqData);
    
    this.notesService.addNotes(reqData).subscribe(
      (response: any) => {
        console.log('Note added:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.display = true;
  }

  
















 

//   isExpanded = false;
//   note = { title: '', description: '' };

// NotesForm!:FormGroup;

//   constructor(private formbuilder:FormBuilder, private notesService: NotesService) {}

//   expandNote() {
//     this.isExpanded = true;
//   }

//   autoResize(event: any) {
//     event.target.style.height = 'auto';
//     event.target.style.height = event.target.scrollHeight + 'px';
//   }

// ngOnInit(): void {
//   this.NotesForm=this.formbuilder.group({
// title:[''],
// desc:['']


//   })
// }
// onSubnmit()
// {
// let reqData={
//   title:this.NotesForm.value.title,
//   desc:this.NotesForm.value.desc
// }
// console.log(reqData);
// this.notesService.addNotes(reqData).subscribe(response:any)=>{

// }
// this.display=true;
// }








  // addNote() {
  //   if (this.note.title || this.note.description) {
  //     this.notesService.addNotes(this.note).subscribe(
  //       (response: any) => {
  //         console.log('Note added successfully:', response);
  //         this.note = { title: '', description: '' }; 
  //         this.isExpanded = false; 
  //       },
  //       (error: any) => {
  //         console.error('Error adding note:', error);
  //       }
  //     );
  //   }
  // }
}
