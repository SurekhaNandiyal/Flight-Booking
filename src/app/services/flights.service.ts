import { Injectable } from '@angular/core';
import {FLIGHTS, MYFLIGHTS} from "../model/mock-flights";

@Injectable()
export class FlightsService {

  constructor() { }

  public getFlights() : Flight[]{
     let url = "http://localhost:8080/flightserver/flights";
     let resultObservable = this.http.get(url);
  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

}
