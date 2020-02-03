import { Component, OnInit } from '@angular/core';
import { Beer } from '../model/beer.model';
import { BeerService } from '../services/beer.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

//const BEERS = [{"_id":1,"name":"Hoptopod","country":"Serbia","description":"","picture":""},{"_id":2,"name":"Salto pale ale","country":"Serbia","description":"","picture":""},{"_id":3,"name":"La chouffe","country":"Belgium","description":"","picture":""},{"_id":4,"name":"Vaikus","country":"Estonia","description":"","picture":""},{"_id":5,"name":"Ola dub","country":"Scotland","description":"","picture":""},{"_id":6,"name":"Schneider tap 6","country":"Germany","description":"","picture":""},{"_id":7,"name":"Malastrana pils","country":"Czech","description":"","picture":"l"},{"_id":8,"name":"Boris the blade","country":"Hungary","description":"","picture":""},{"_id":9,"name":"Sunshine","country":"Serbia","description":"","picture":""},{"_id":10,"name":"Matador","country":"Serbia","description":"","picture":""},{"_id":11,"name":"Crasher","country":"Serbia","description":"","picture":""},{"_id":12,"name":"Old engine oil","country":"Scotland","description":"","picture":""}];

@Component({
  selector: 'bs-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  //private beerList :Beer[] = [];
  private beerList :Beer[] = [];
  private count :number = 0;
  beerCount :number;
  private noBtnClicks = 0;

  private params = {
    sort: "",
    sortDirection : "asc",
    page: 1,
    pageSize: 6,
    filter: {
      name: "",
      priceFrom: '',
      priceTo: ''
    }
    
  };
    constructor(private beerService : BeerService,private route: ActivatedRoute) {
      //for(let beerObj of BEERS){
        //this.beerList.push(new Beer(beerObj));
      //}
     }

    ngOnInit() {
        this.refreshList(); 
    }

    refreshList(){
      this.beerService.getAll(this.params).subscribe( 
        data => {
          this.beerList = data.beers;
          this.beerCount = data.count;
          console.log("Retreived beers: ", this.beerCount);
        }, 

        error => {
          console.log("Error retreiving pizzas from server. Reason: ", error.statusText);
        }
      );
    }

    changePage(newPage :number){
      this.params.page = newPage;
      this.refreshList();
    }

    searchByName(obj){
      this.params.filter.name = obj.a;
      this.params.filter.priceFrom = obj.b;
      this.params.filter.priceTo = obj.c;
      this.params.sort = obj.d;
      this.params.sortDirection = obj.e;
      this.refreshList();
    }


}
