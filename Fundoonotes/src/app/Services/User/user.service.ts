import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 


  constructor(private http: HttpService) {}

  Login(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })
    };
    console.log("Sending Login Request: ", reqData);

    return this.http.PostService('https://localhost:7046/api/users/login', reqData, false, headers);
  }

 

  Register(reqData: any) {
    let headers = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' 
      })
    };
    return this.http.PostService('https://localhost:7046/api/users/register', reqData, false, headers);
  }
  
}
