import { Component, OnInit } from '@angular/core';

import { ClockService } from "../../services/clock.service";
import { IProduct } from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [{
    "id": 1,
    "product": "Lamb - Pieces, Diced",
    "price": 226.03,
    "image": "http://dummyimage.com/186x100.png/dddddd/000000"
  }, {
    "id": 2,
    "product": "Cranberries - Frozen",
    "price": 836.74,
    "image": "http://dummyimage.com/206x100.png/dddddd/000000"
  }, {
    "id": 3,
    "product": "Ham - Virginia",
    "price": 197.35,
    "image": "http://dummyimage.com/139x100.png/ff4444/ffffff"
  }, {
    "id": 4,
    "product": "Beans - Kidney, Red Dry",
    "price": 705.2,
    "image": "http://dummyimage.com/242x100.png/dddddd/000000"
  }, {
    "id": 5,
    "product": "Pastry - Cherry Danish - Mini",
    "price": 873.07,
    "image": "http://dummyimage.com/156x100.png/ff4444/ffffff"
  }, {
    "id": 6,
    "product": "Tea Peppermint",
    "price": 472.41,
    "image": "http://dummyimage.com/114x100.png/ff4444/ffffff"
  }, {
    "id": 7,
    "product": "Sauce - Oyster",
    "price": 575.82,
    "image": "http://dummyimage.com/157x100.png/ff4444/ffffff"
  }, {
    "id": 8,
    "product": "Veal - Brisket, Provimi, Bone - In",
    "price": 823.4,
    "image": "http://dummyimage.com/194x100.png/dddddd/000000"
  }, {
    "id": 9,
    "product": "Pork - Side Ribs",
    "price": 220.78,
    "image": "http://dummyimage.com/123x100.png/cc0000/ffffff"
  }, {
    "id": 10,
    "product": "Gingerale - Diet - Schweppes",
    "price": 967.73,
    "image": "http://dummyimage.com/204x100.png/ff4444/ffffff"
  }]

  clock: any | undefined;

  constructor(
    private clockService:ClockService
  ) { }

  ngOnInit(): void {
    this.clockService.clock().subscribe(() => {
      this.currentTime();
    });
  }


  currentTime(){
    let date = new Date(); 
    let hh:any = date.getHours();
    let mm:any = date.getMinutes();
    let ss:any = date.getSeconds();
    let session = "AM";

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;

    this.clock = time;
  }
    
}
