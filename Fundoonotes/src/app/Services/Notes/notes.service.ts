import { HttpHeaders, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
token:any;
  constructor(private httpService:HttpService) {
this.token=localStorage.getItem('token')

   }



   

addNotes(reqData: any) {
  let headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` 
    })
  };

  return this.httpService.postServiceToken('https://localhost:7046/api/notes', reqData, true, headers);
}


getNotes(){
  let headers={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` 

    })

  };
  return this.httpService.getService("https://localhost:7046/api/notes",true,headers);
}


}
