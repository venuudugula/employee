import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = "https://6572df5d192318b7db412dfe.mockapi.io/employees";

  constructor(private _httpClient:HttpClient) {
     
   }

   getEmployees():Observable<any>{
    return this._httpClient.get(this.baseUrl)
   }

   getFilterEmployees(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+ "?filter=" +term);
  }

  getPages(pageNO:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+ "?limit=5&page=" +pageNO);
  }

  sortedEmployees(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+ "?sortBy=" +column+ "&order=" +order)
  }

  deleteEmployees(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/'+id)
  }

  createEmployees(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }

}
