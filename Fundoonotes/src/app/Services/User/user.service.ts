import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 


  constructor(private http: HttpService,private httpclient:HttpClient) {}

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
  
Forgot(reqData:any)
{
  let headers={
    headers:new HttpHeaders({
      'Content-Type': 'application/json' 
    })
  }
  return this.http.postServiceToken('https://localhost:7046/api/users/forgot-password',reqData,true,headers);


}

// ResetPassword(reqData: any, token: string) {
//   let headers = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`  // Assuming token is needed for reset
//     })
//   };

//   return this.http.postServiceToken(
//     'https://localhost:7046/api/users/reset-password',
//     reqData,
//     true,
//     headers
//   );
// }

// ResetPassword(reqData: any) {
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json'
//   });

//   return this.httpclient.post(
//     'https://localhost:7046/api/users/reset-password',
//     reqData,
//     { headers }
//   );
// }

ResetPassword(resetData: any, token: string) {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this.httpclient.post(
    'https://localhost:7046/api/users/reset-password',
    resetData,
    { headers }
  );
}




}

