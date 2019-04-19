import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { CnesList } from './cneslist.model';

@Injectable()
export class CnesListService{
    constructor(private http: Http){}

    getQtdListCnes(cnesList: CnesList, limit:number):Observable<CnesList>{
        return this.http.get(`${MEAT_API}/api/cnesfirtsdocs/${limit}`)
                        .map(res => res.json())
                        .map(cnesList => cnesList)
    }

    getTotalCount():Observable<number>{
        return this.http.get(`${MEAT_API}/api/cnes/count`)
                        .map(res => res.json())                        
    }
}