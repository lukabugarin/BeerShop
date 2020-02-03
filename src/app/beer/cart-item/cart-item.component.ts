import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../model/cart.model';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'bs-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: Cart;
  @Output() itemDeleted :EventEmitter<number>;

  constructor(private beerService: BeerService) { 
    this.itemDeleted = new EventEmitter();
  }

  ngOnInit() {
  }

  onDelete(id: number){
    this.beerService.deleteFromCart(id).subscribe( item => {
      console.log("Deleted item: ", item);
      this.itemDeleted.emit(item._id);
    });
  }

}
