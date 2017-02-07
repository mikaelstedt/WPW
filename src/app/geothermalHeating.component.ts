import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { LocationModel, WebApiService } from './services/index';

@Component({
  selector: 'geothermalHeating.component',
  templateUrl: './geothermalHeating.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class GeothermalHeatingComponent implements OnInit
{
  title = 'GeothermalHeatingComponent';

  locationModel: LocationModel[];

  constructor(private webApi: WebApiService)
  {
  }

  ngOnInit(): void
  {

  }

  getLocation(): Promise<LocationModel[]>
  {
    return this.webApi.getAllCities().then(resp => 
    {
      return resp;
    });
  }

}