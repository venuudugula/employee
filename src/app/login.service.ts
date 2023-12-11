import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'https://reqres.in/api/login'

  constructor(private _httpClient:HttpClient ) { }
  getLoginCred(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
}
}
