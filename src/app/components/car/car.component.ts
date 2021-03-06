import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  carDetail:CarDetail[]=[]
  dataLoaded=false;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails()
  }


    
    getCarDetails(){
      this.carService.getCarDetails().subscribe((response=>{
        this.carDetail=response.data
        this.dataLoaded=true
      }))
    }
  
}
