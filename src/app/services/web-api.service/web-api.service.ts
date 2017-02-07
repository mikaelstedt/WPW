import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { LocationModel } from './location-data';


@Injectable()
export class WebApiService 
{
    baseUrl: string = "http://localhost:3516/api/Values";

    constructor(private http: Http)
    {

    }

    getAllCities(): Promise<LocationModel[]>
    {
        return this.http.post(this.getUrl('GetLocationModels'), null).toPromise().then(response => 
        {
            return response.json() as LocationModel[];

        }).catch(error => 
        {
            return null;
        });
    }

    private getUrl(methodName): string
    {
        return this.baseUrl + '/' + methodName; 
    }
}