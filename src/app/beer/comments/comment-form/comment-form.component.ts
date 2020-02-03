import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../model/comment';

@Component({
  selector: 'bs-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  comment: Comment;
  @Output() addComment = new EventEmitter();


  constructor(private beerService: BeerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.comment = new Comment();
  }

  newComment() {
    this.comment.beers = parseInt(this.route.snapshot.paramMap.get("id"));
    this.comment.date = (new Date).toISOString();
    this.beerService.saveComment(this.comment).subscribe(res => {
      this.comment = new Comment();
      this.addComment.emit(res);
    });
  }

}
