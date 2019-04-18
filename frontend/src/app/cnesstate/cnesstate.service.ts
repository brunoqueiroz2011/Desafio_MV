import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { CnesState } from './cnesstate.model';

@Injectable()
export class CnesStateService{
    constructor(private http: Http){}

    getQtdStates(cnesState: CnesState):Observable<CnesState>{
        return this.http.get(`${MEAT_API}/api/cnesgroupUF`)
                        .map(res => res.json())
                        .map(cnesState => cnesState)
    }
}