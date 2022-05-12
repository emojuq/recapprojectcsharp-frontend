import { RentalDetail } from './../../models/rentalDetail';
import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals : RentalDetail[] = [];
  dataLoaded=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.rentalService.getDetails().subscribe((response=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    }))
  }
 
}
