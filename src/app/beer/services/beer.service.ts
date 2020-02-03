import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import {  BeerSearchResult } from '../model/beerSearchResult.model';
import { map } from 'rxjs/operators';
import { Beer } from '../model/beer.model';
import { CommentList } from '../model/comment-list';
import { CartSearchResult } from '../model/cartSearchResult';
import { Comment } from '../model/comment';
import { Order } from '../model/order';

const baseUrl = "http://localhost:3000/api/beers";
const baseUrl2 = "http://localhost:3000/api/cart";
const baseUrl3 = "http://localhost:3000/api/comments";
const baseUrl4 = "http://localhost:3000/api/orders";


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http :HttpClient) { }

  getAll(params? : any) : Observable<BeerSearchResult>{
    let queryParams = {};
		if(params){
			queryParams = {params : new HttpParams()
				.set("pageSize", params.pageSize && params.pageSize.toString() || "")
				.set("page", params.page && params.page.toString() || "")
				.set("filter", params.filter && JSON.stringify(params.filter) || "")
				.set("sort", params.sort && params.sort.toString() || "")
				.set("sortDirection", params.sortDirection && params.sortDirection.toString() || "")
			}
		}
    return this.http.get(baseUrl, queryParams).pipe(map(
      data => { return new BeerSearchResult(data) }
    ));
  }
  
  get(id :number) :Observable<Beer>{
    return this.http.get(baseUrl + "/" + id).pipe(map(
      response => { return new Beer(response); }
    ));
  }
	
	updateBeer(beer: Beer): Observable<Beer> {
    return this.http.put<Beer>(baseUrl + "/" + beer._id, beer).pipe(map(res => {
      return new Beer(res);
    }));
  }

  add(cartBeer :Beer) :Observable<Beer>{
		return this.http.post(baseUrl2, cartBeer).pipe(map(
			data => { return new Beer(data) }
		));
	}

  getAllCart(): Observable<CartSearchResult>{
    return this.http.get(baseUrl2).pipe(map(
      data => { return new CartSearchResult(data) }
    ));
  }

  deleteFromCart(id :number) :Observable<Beer> {
		return this.http.delete(baseUrl2 + "/" + id).pipe(map(
			data => { return new Beer(data) }
		));
  }
  
  getComments(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(baseUrl + "/" + id + "/comments").pipe(map(res => {
      return new CommentList(res);
    }));
  }
  
  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(baseUrl + "/" + comment.beers + "/comments", comment).pipe(map(res => {
      return new Comment(res);
    }));
  }

  saveOrder(order : Order) {
    return this.http.post(baseUrl4,order);
  }
}
