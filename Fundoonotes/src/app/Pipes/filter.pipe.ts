
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any[] | null | undefined, filterNote: any): any[] {
    if (!value || !Array.isArray(value)) {
      return []; 
    }

    
    const searchQuery = (filterNote || '').toString().trim().toLowerCase();

    if (searchQuery === '') {
      return value; 
    }

    return value.filter(note => note.title?.toLowerCase().includes(searchQuery));
  }
}

