import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { SearchFormComponent } from './beer/search-form/search-form.component';
import { ListComponent } from './beer/list/list.component';
import { PaginationComponent } from './beer/pagination/pagination.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BeerInfoComponent } from './beer/beer-info/beer-info.component';
import { CartComponent } from './beer/cart/cart.component';
import { CartItemComponent } from './beer/cart-item/cart-item.component';
import { CommentsComponent } from './beer/comments/comments.component';
import { CommentComponent } from './beer/comments/comment/comment.component';
import { CommentFormComponent } from './beer/comments/comment-form/comment-form.component';
import { CartFormComponent } from './beer/cart/cart-form/cart-form.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeerListComponent,
    SearchFormComponent,
    ListComponent,
    PaginationComponent,
    AboutComponent,
    BeerInfoComponent,
    CartComponent,
    CartItemComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    CartFormComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
