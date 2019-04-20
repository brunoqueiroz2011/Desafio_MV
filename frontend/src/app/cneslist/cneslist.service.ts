import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { CnesList } from './cneslist.model';

@Injectable()
export class CnesListService{
    constructor(private http: Http){}

    getQtdListCnes(cnesList: CnesList, limit:number):Observable<CnesList>{
        console.log(environment.baseURL)
        //return this.http.get(`${environment.baseURL}/api/cnes`)
        return this.http.get(`${environment.baseURL}/api/cnesfirtsdocs/${limit}`)        
                        .map(res => res.json())
                        .map(cnesList => cnesList)
    }

    getTotalCount():Observable<number>{
        return this.http.get(`${environment.baseURL}/api/cnes/count`)
                        .map(res => res.json())                        
    }
}