import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Beer } from '../model/beer.model';

@Component({
  selector: 'bs-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() beerList: Beer[];
  @Output() onSearch :EventEmitter<any>;
  searchForm: FormGroup;
  a: string;
  

  constructor(private fb: FormBuilder) {
    this.onSearch = new EventEmitter();
    this.searchForm = this.fb.group({
      'searchText': '',
      'priceFrom': '',
      'priceTo': '',
      'sortCriteria': '',
      'sortDirection': ''
    });
   }

  ngOnInit() {
  }

  search() : void {
    this.onSearch.emit({a: this.searchForm.value.searchText, b: this.searchForm.value.priceFrom, c: this.searchForm.value.priceTo, d: this.searchForm.value.sortCriteria, e: this.searchForm.value.sortDirection});
  }


}
