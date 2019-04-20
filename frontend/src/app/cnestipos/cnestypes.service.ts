import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CnesTypes } from './cnestypes.model';
import { environment } from 'environments/environment';

@Injectable()
export class CnesTypesService{
    constructor(private http: Http){}

    getQtdTypes(cnesType: CnesTypes):Observable<CnesTypes>{
        return this.http.get(`${environment.baseURL}/api/cnesgrouptbgestao`)
                        .map(res => res.json())
                        .map(cnesType => cnesType)
    }
}