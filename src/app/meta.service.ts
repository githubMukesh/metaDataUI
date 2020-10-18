import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private doamin = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

   public fetch(endPoint: string, body?:any): Observable<any>{
     const url = `${this.doamin}/${endPoint}`;
     if(body){
        return this.http.post(url, body);
     }
     return this.http.get(url);
   }

}
