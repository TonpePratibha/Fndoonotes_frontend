import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit{
 @Output() refreshEventCreate=new EventEmitter<string>();
   isExpanded = false;
  NotesForm!: FormGroup;
  display = false;

  constructor(private formbuilder: FormBuilder, private notesService: NotesService) {}

  ngOnInit(): void {
    this.NotesForm = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      color:['']
    });
    
  
  }

  expandNote() {
    this.isExpanded = true;
  }

  

  autoResize(event: any) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }


  onColorSelected(color: string) {
    this.NotesForm.patchValue({ color }); // Update the form's color field
    console.log("Color selected in create:", color);
  }
  
  onSubmit() {
    if (this.NotesForm.invalid) {
      return;
    }

    let reqData = {
      title: this.NotesForm.value.title,
      description: this.NotesForm.value.description,
      color: this.NotesForm.value.color 
    };

    console.log(reqData);
    
    this.notesService.addNotes(reqData).subscribe(
      (response: any) => {
        console.log('Note added:', response);
        this.refreshEventCreate.emit(response);
        
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.display = true;
  }

 
  
 
 





}






