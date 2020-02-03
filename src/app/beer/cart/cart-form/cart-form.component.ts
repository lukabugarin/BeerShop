import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from '../../model/order';

@Component({
  selector: 'bs-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {
  @Output() newOrder = new EventEmitter<Order>();

  order: Order = new Order();


  constructor() { }

  ngOnInit() {
  }


  saveOrder() {
    this.newOrder.emit(this.order);
    this.order = new Order();
  }
}
