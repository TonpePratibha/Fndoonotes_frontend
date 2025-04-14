import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isGridViewSubject = new BehaviorSubject<boolean>(true);
  isGridView$ = this.isGridViewSubject.asObservable();

  setGridView(isGrid: boolean) {
    this.isGridViewSubject.next(isGrid);
  }
}
