import { TestBed } from '@angular/core/testing';

import { NotesrefreshService } from './notesrefresh.service';

describe('NotesrefreshService', () => {
  let service: NotesrefreshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesrefreshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
