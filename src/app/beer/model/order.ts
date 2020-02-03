import { Cart } from './cart.model';

export class Order {
  _id: number;
  firstName: string;
  lastName: string;
  price: number;

  constructor(obj?: any){
    this._id = obj && obj._id || null;
    this.firstName = obj && obj.firstName || "";
    this.lastName = obj && obj.lastName || "";
    this.price = obj && obj.price || 0;
    
  }
}