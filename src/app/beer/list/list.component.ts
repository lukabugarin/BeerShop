import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Beer } from '../model/beer.model';
import { BeerService } from '../services/beer.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'bs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()  beer :Beer;
  @Output() onInputChanged = new EventEmitter();

  constructor(private beerService: BeerService,private modal: NgbModal) { }

  ngOnInit() {
  }

  onBtnClick(beer: Beer) {
    console.log(beer);
    this.beerService.add(beer).subscribe(addedBeer => {
      console.log("Added beer: ", JSON.stringify(addedBeer));
       });
    alert("Beer added to cart!");
    
  }

  /* vote(grade: number) {
    let tempBeer = new Beer(this.beer);
    tempBeer.grade = grade;
    this.beerService.updateBeer(tempBeer).subscribe(res => this.beer = res);
  }
  */

 

}
