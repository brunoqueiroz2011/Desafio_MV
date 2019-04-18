import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { CnesTypes } from './cnestypes.model';

@Injectable()
export class CnesTypesService{
    constructor(private http: Http){}

    getQtdTypes(cnesType: CnesTypes):Observable<CnesTypes>{
        return this.http.get(`${MEAT_API}/api/cnesgrouptbgestao`)
                        .map(res => res.json())
                        .map(cnesType => cnesType)
    }
}