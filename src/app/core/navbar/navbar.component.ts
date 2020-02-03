import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Cart } from 'src/app/beer/model/cart.model';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count: number = 0;
  itemList: Cart[] = [];
  

  constructor(private beerService: BeerService ) { }

  ngOnInit() {
    this.getCount();
  }

  getCount() {
    this.beerService.getAllCart().subscribe(
      data => {
        this.count = data.count;
        this.itemList = data.items;
      }
    )
  }
}
