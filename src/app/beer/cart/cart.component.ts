import { Component, OnInit, Input } from '@angular/core';
import { BeerInfoComponent } from '../beer-info/beer-info.component';
import { BeerService } from '../services/beer.service';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'bs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private itemList :Cart[] = [];
  count :number;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.beerService.getAllCart().subscribe(
      data => {
          this.itemList = data.items;
          this.count = data.count;
          console.log("Retreived beers: ", this.itemList);
      }
    );
  }

  newOrder(order){
   var response = JSON.stringify(order);
    this.beerService.saveOrder(order).subscribe(res => {
      this.refreshList();
      window.alert(response);
    }, err => {
      window.alert("Error: " + err);
    });
    console.log(response);
   
  }

  
}
