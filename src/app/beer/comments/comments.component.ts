import { Component, OnInit } from '@angular/core';
import { CommentList } from '../model/comment-list';
import { BeerService } from '../services/beer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bs-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: CommentList;

  constructor(private beerService: BeerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.beerService.getComments(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        res => this.comments = res
      );
    });
  }

  addComment(comment) {
    this.comments.results.push(comment);
    this.comments.count += 1;
  }

}
