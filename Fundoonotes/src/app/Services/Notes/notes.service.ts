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

updateNotes(reqData:any,notesId:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` 

    })
  }
  return this.httpService.putService(`https://localhost:7046/api/notes/update/${notesId}`,reqData,true,header)

}






trashNotes(reqData:any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }
  console.log('Request ID:', reqData.id);
 return this.httpService.putService(`https://localhost:7046/api/notes/trash/${reqData.id}`,{},true,header)
 

}



archievNotes(reqData:any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
       'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }
   return this.httpService.putService(`https://localhost:7046/api/notes/archive/${reqData.id}`,{},true,header);
  
}

// notesColor(reqData:any){
// console.log(reqData)
// let header={
//   headers:new HttpHeaders({
//     'Content-Type': 'application/json',
//    'Authorization': `Bearer ${this.token}`
//  })
// }
// return this.httpService.putService(`https://localhost:7046/api/notes/${reqData.id}`,{color: reqData.color},true,header)
// }

notesColor(reqData: any) {
  console.log("API Request Data:", reqData);

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  return this.httpService.patchService(
    `https://localhost:7046/api/notes/${reqData.id}/color`,  
    { color: reqData.color },  
    true,
    header
  );
}


deleteNote(reqData: any) {
  console.log(reqData);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  return this.httpService.deleteService(
    `https://localhost:7046/api/notes/${reqData.id}`,
    true,
    header
  );
}


}
