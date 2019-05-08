import { Component, OnInit } from '@angular/core';
import { ReviewDetails } from './reviews-entity.model';
import { Subscription } from 'rxjs';
import { ReviewerDetails_Service } from './reviews-entity.service';
import { delay } from 'q';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-reviews-entity',
  templateUrl: './reviews-entity.component.html',
  styleUrls: ['./reviews-entity.component.css']
})
export class ReviewsEntityComponent implements OnInit {

  type1: string;
  type2: string;
  type3: string;
  /**
   *
   * variable list used to carry book title
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  booktitle: string [] = [];
  /**
   *
   * variable list used to carry book image
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  bookimage: string [] = [];
  /**
   *
   * variable list used to carry book author
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  bookauthor: string [] = [];
  /**
   *
   * variable list used to carry book date
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  bookreaddate: string [] = [];
  /**
   *
   * variable list used to carry book id
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  bookid: string [] = [];
  /**
   *
   * variable list used to carry reviewer id
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerid: string [] = [];
  /**
   *
   * variable list used to carry reviewer image
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerimage: string [] = [];
  /**
   *
   * variable list used to carry reviewer rate
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerrate: string [] = [];
  /**
   *
   * variable list used to carry reviewer name
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewername: string [] = [];
  /**
   *
   * variable list used to carry reviewer body
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerbody: string [] = [];
  /**
   *
   * variable list used to carry reviewer likes
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerlikes: string [] = [];
  /**
   *
   * variable list used to carry reviewer comments
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewercomments: string [] = [];
  /**
   *
   * variable list used to carry reviewer date
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  reviewerdate: string [] = [];
  // tslint:disable-next-line:variable-name
  /**
   *
   * variable used to carry Subscription
   * @private
   * @type {Subscription}
   * @memberof ReviewsEntityComponent
   */
  private Sub_profile: Subscription;
  // tslint:disable-next-line:variable-name
  /**
   *
   * variable used to carry review_details
   * @type {ReviewDetails[]}
   * @memberof ReviewsEntityComponent
   */
  public review_details: ReviewDetails[] = [];
  // tslint:disable-next-line: variable-name
  /**
   *
   * variable used to carry half of review body
   * @type {string []}
   * @memberof ReviewsEntityComponent
   */
  public befor_dots: string [] = [];
// tslint:disable-next-line: variable-name
/**
 *
 * variable used to carry half of review body
 * @type {string []}
 * @memberof ReviewsEntityComponent
 */
public after_dots: string [] = [];
// tslint:disable-next-line: variable-name
/**
 * Creates an instance of ReviewsEntityComponent.
 * @param {ReviewerDetails_Service} review_service
 * @memberof ReviewsEntityComponent
 */
bookstatus: string;
constructor(public review_service: ReviewerDetails_Service, public snackbar: MatSnackBar) { }
/**
 *
 * function used to intilize page and set list of reviews
 * @memberof ReviewsEntityComponent
 */
ngOnInit() {
    this.review_service.get_Review_Info();                                  // to get the user info from the service
    // tslint:disable-next-line:variable-name
    this.Sub_profile = this.review_service.get_review_Info_updated().subscribe((review_Information: ReviewDetails[]) => {
      this.review_details = review_Information;
      this.SetElements();
      this.SplitString();
      /* console.log(this.User_info.User_Name)
      console.log(this.User_info.user_id)
      console.log(this.User_info.User_Photo)*/
    });
    this.bookstatus = 'Add To Shelf';
    this.assign_status('Add To Shelf');
  }
  /**
   *
   * function used to set lists elements
   * @memberof ReviewsEntityComponent
   */
  SetElements() {
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.review_details.length; x++) {
      this.booktitle[x] = this.review_details[x].book_title;
      this.bookimage[x] = this.review_details[x].book_image;
      this.bookauthor[x] = this.review_details[x].book_author;
      this.bookreaddate[x] = this.review_details[x].reviewer_date;
      this.bookid[x] = this.review_details[x].book_id;
      this.reviewerid[x] = this.review_details[x].reviewer_id;
      this.reviewerimage[x] = this.review_details[x].reviewer_image;
      this.reviewerrate[x] = this.review_details[x].reviewer_rate;
      this.reviewername[x] = this.review_details[x].reviewer_name;
      this.reviewerbody[x] = this.review_details[x].reviewer_body;
      this.reviewerlikes[x] = this.review_details[x].reviewer_likes;
      this.reviewercomments[x] = this.review_details[x].reviewer_comments;
      this.reviewerdate[x] = this.review_details[x].reviewer_date;
    }
  }
  /**
   *
   * function used to expand the review body
   * @memberof ReviewsEntityComponent
   */
  more_review_discription() {
    const dots = document.getElementById('dots-user-review');
    const moreText = document.getElementById('more-review');
    const btnText = document.getElementById('myBtn-user-review');
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read Full Review';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Show Less Review';
      moreText.style.display = 'inline';
    }
  }
  /**
   *
   * function used to split review body
   * @memberof ReviewsEntityComponent
   */
  SplitString() {
// tslint:disable-next-line: variable-name
    let starting_indext = 0;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.review_details.length; i ++) {
// tslint:disable-next-line: prefer-const
      let word = this.review_details[i].reviewer_body.split(',');
      this.befor_dots[starting_indext] = word[0];
      this.after_dots[starting_indext] = word[1];
      starting_indext++;
    }
  }
  assign_status(index: string) {
    if (index === 'Want To Read') {
      this.type1 = 'Currently Reading';
      this.type2 = 'Remove From Shelve';
      this.type3 = '';
    } else if (index === 'Read') {
      this.type1 = 'Remove From Shelve';
      this.type2 = '';
      this.type3 = '';
    } else if (index === 'Currently Reading') {
      this.type1 = 'Read';
      this.type2 = 'Remove From Shelve';
      this.type3 = '';
    } else if (index === 'Add To Shelf') {
      this.type1 = 'Want To Read';
      this.type2 = 'Currently Reading';
      this.type3 = 'Read';
    }
  }
  book_status_Post(indexfirst: string, indexsecond: string) {
    const first = document.getElementById(indexfirst);
    const second = document.getElementById(indexsecond);
    const y = first.textContent;
    const x = second.textContent;
    if (y === 'Read') {
      first.textContent = 'Add To Shelf';
      const snackbaref = this.snackbar.open('Book Has Been Removed', ' ' , {
        horizontalPosition: 'end',
        duration: 2000
      });
      this.assign_status(first.textContent);
    } else if (y === 'Want To Read') {
      if (x === 'Remove From Shelve') {
        first.textContent = 'Add To Shelf';
        const snackbaref = this.snackbar.open('Book Has Been Removed', ' ' , {
          horizontalPosition: 'end',
          duration: 2000
        });
        this.assign_status(first.textContent);
      } else {
        first.textContent = x;
        const snackbaref = this.snackbar.open('Book Has Been Added To Currently Reading', ' ' , {
          horizontalPosition: 'end',
          duration: 2000
        });
        this.assign_status(x);
      }
    } else if (y === 'Currently Reading') {
      if (x === 'Remove From Shelve') {
        first.textContent = 'Add To Shelf';
        const snackbaref = this.snackbar.open('Book Has Been Removed', ' ' , {
          horizontalPosition: 'end',
          duration: 2000
        });
        this.assign_status(first.textContent);
      } else {
        first.textContent = x;
        const snackbaref = this.snackbar.open('Book Has Been Added to Read', ' ' , {
          horizontalPosition: 'end',
          duration: 2000
        });
        this.assign_status(x);
      }
    } else if (y === 'Add To Shelf') {
      first.textContent = x;
      const snackbaref = this.snackbar.open('Book Has Been Added', ' ' , {
        horizontalPosition: 'end',
        duration: 2000
      });
      this.assign_status(x);
    }
  }
  OnclickLike() {
    const Liked = document.getElementById('liked');
    const liking = document.getElementById('show-likes');
    if(Liked.innerHTML === 'Like') {
      const snackbaref = this.snackbar.open('Liked Review', ' ' , {
        horizontalPosition: 'end',
        duration: 2000
      });
      Liked.innerHTML = 'Liked';
      let x = liking.innerHTML.toString();
// tslint:disable-next-line: radix
      let y = parseInt(x);
      y = y + 1;
      x = y.toString();
      liking.innerHTML = x;
    } else {
      const snackbaref = this.snackbar.open('Unlike Review', ' ' , {
        horizontalPosition: 'end',
        duration: 2000
      });
      Liked.innerHTML = 'Like';
      let x = liking.innerHTML.toString();
// tslint:disable-next-line: radix
      let y = parseInt(x);
      y = y - 1;
      x = y.toString();
      liking.innerHTML = x;
    }
  }
}
