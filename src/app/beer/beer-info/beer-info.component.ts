import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { BeerSearchResult } from '../model/beerSearchResult.model';
import { BeerService } from '../services/beer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Beer } from '../model/beer.model';
import { BeerListComponent } from '../beer-list/beer-list.component';

@Component({
  selector: 'bs-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.scss']
})
export class BeerInfoComponent implements OnInit {
  @Output() onInputChanged :EventEmitter<any>;
  beer: Beer;
  beerCount = 0;

  constructor(private beerService :BeerService, private router :Router,
    private route :ActivatedRoute) { 
      this.onInputChanged = new EventEmitter();
    }

  ngOnInit() {
    let id :string = this.route.snapshot.params.id;
      // console.log('id param from URL: ', id);     
      if (id){
        // this.wine = this.wineService.get(Number(id));
        this.beerService.get(Number(id)).subscribe(
          beer => {
            this.beer = beer;    
          }
        );        
      }
  }

  onBtnClick(beer: Beer) {
    console.log(beer);
    this.beerService.add(beer).subscribe(addedBeer => {
      console.log("Added beer: ", JSON.stringify(addedBeer));
      
    });
  }

}
