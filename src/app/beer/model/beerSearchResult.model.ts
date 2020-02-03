import { Beer } from './beer.model';

export class BeerSearchResult{
	beers :Beer[];
	count :number;

	constructor(obj? :any){
		this.beers = obj && obj.results.map(elem => { return new Beer(elem); }) || [];
		/* Linija iznad ima isti efekat kao kod u ovom komentaru: 
		this.pizzas = [];
		for(let elem of obj.results){
			this.pizzas.push(new Pizza(elem));
		} */

		this.count = obj && obj.count || null;
	}	
}