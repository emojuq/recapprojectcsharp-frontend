import { CarDetail } from './../models/carDetail';
import { Car } from './../models/car';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44386/api/cars/getcardetails';
  constructor(private httpClient:HttpClient) { }

  // getAll():Observable<ListResponseModel<Car>>{
  //   return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"getAll");
  // }


  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }

}
