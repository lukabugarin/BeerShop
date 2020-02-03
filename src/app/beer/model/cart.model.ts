export class Cart {
	_id: number;
	name: string;
	description: string;
	country: string;
	picture: string;
	grade: number;
	price: number;
	style: string;

	constructor(obj?: any){
		this._id = obj && obj._id || null;
		this.name = obj && obj.name || null;
		this.description = obj && obj.description || null;
		this.country = obj && obj.country || null;
		this.picture = obj && obj.picture || null;
		this.grade = obj && obj.grade || null;
		this.price = obj && obj.price || null;
		this.style = obj && obj.style || null;
	}
}