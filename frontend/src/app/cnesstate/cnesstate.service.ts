import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CnesState } from './cnesstate.model';
import { environment } from 'environments/environment';

@Injectable()
export class CnesStateService{
    constructor(private http: Http){}

    getQtdStates(cnesState: CnesState):Observable<CnesState>{
        return this.http.get(`${environment.baseURL}/api/cnesgroupUF`)
                        .map(res => res.json())
                        .map(cnesState => cnesState)
    }
}