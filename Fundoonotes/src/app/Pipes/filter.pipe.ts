// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter',
//   standalone: false
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: any[], filterNote: string): any[] {
//     if(filterNote===''){
//       return value;
//     }
//     const notes=[];
//     for(const note of value){
//       if(note.title.includes(filterNote))
//         notes.push(note)
//     }
 

// return notes;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any[] | null | undefined, filterNote: any): any[] {
    if (!value || !Array.isArray(value)) {
      return []; // ✅ Return empty array if value is null/undefined
    }

    // ✅ Ensure filterNote is always a string
    const searchQuery = (filterNote || '').toString().trim().toLowerCase();

    if (searchQuery === '') {
      return value; // ✅ Return original array if filter is empty
    }

    return value.filter(note => note.title?.toLowerCase().includes(searchQuery));
  }
}

