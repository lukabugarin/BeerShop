import { Cart } from './cart.model';

export class CartSearchResult{
	items :Cart[];
	count :number;

	constructor(obj? :any){
		this.items = obj && obj.results.map(elem => { return new Cart(elem); }) || [];
		/* Linija iznad ima isti efekat kao kod u ovom komentaru: 
		this.pizzas = [];
		for(let elem of obj.results){
			this.pizzas.push(new Pizza(elem));
		} */

		this.count = obj && obj.count || null;
	}	
}