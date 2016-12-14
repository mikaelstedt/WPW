import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { LocationModel } from './location-data';


@Injectable()
export class WebApiService 
{
    baseUrl : string = "http:\\localhost";

    constructor(private http: Http)
    {

    }

    getAllCities(): Promise<LocationModel>
    {
        return this.http.post(this.baseUrl, null).toPromise().then(response => {
            return new LocationModel();
        });
    }
}