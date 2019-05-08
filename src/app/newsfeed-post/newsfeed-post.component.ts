import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsServices } from '../newsfeed/newsfeed-main.service';
import { Post } from '../newsfeed/newsfeed-main.model';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { AddToShelfService } from './add-to-shelf.service';

/**
 *  Newsfeed post component
 *  @export
 *  @class NewsfeedPostComponent
 *  @implements {OnInit}
 */
@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.css']
})

export class NewsfeedPostComponent implements OnInit {


  /**
   *
   * user name variable which is an input to the component
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() userName: string;

  /**
   *
   * number of stars which is an input to the component
   * @type {*}
   * @memberof NewsfeedPostComponent
   */
  @Input() NumberOfStars: any;

  /**
   *
   *the date of the activity which is a variable which is an input to the component
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() activityDate: string;

  /**
   *
   * book image 
   * @type {*}
   * @memberof NewsfeedPostComponent
   */
  @Input() bookimage: any;

  /**
   *
   * name of the book 
   * @type {*}
   * @memberof NewsfeedPostComponent
   */
  @Input() bookname: any;

  /**
   *
   * the name of the author
   * @type {*}
   * @memberof NewsfeedPostComponent
   */
  @Input() authorname: any;

  /**
   *
   * the book status : read/reading/want to read
   * @type {*}
   * @memberof NewsfeedPostComponent
   */
  @Input() bookstatus: any;

  /**
   * the bode of the review
   *
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() review: string;

  /**
   *
   * the image of the person i am following
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() makerImage: string;

  /**
   *
   * the book id 
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() bookId: string;

  /**
   *
   * the id of the author of the book 
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() authorId: string; 

  /**
   * the id of the user
   * 
   * @type {string}
   * @memberof NewsfeedPostComponent
   */
  @Input() userId: string; 
 

  /**
   *  This is the constructor of the component class, it makes an instance of the posts service class
   *  @private
   *  @type {Subscription}
   *  @memberof NewsfeedPostComponent
   */
  private subprofile: Subscription;

  /**
   *
   * Post object to fill data
   * @type {Post}
   * @memberof NewsfeedPostComponent
   */
  PostObj: Post[] = [];


   constructor(private addToShelfService: AddToShelfService) { }
  
  /**
   * The  functions created in the service are implemented here
   *
   * @memberof NewsfeedPostComponent
   */
  ngOnInit() {  
  }
}
