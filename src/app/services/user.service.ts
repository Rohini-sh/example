import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { User } from  './user';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

// gettingdb(){
//   return this.http.get()
// }
}
