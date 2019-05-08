import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Row } from './genre-row.model';
import { RowServices } from './genre-row.service';

/**
 * Genre row component
 * @export
 * @class GenreRowComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-genre-row',
  templateUrl: './genre-row.component.html',
  styleUrls: ['./genre-row.component.css']
})
export class GenreRowComponent implements OnInit {


  /**
   *
   * this is an input sent to the genre row component by the genre type required
   * @type {string}
   * @memberof GenreRowComponent
   */
  @Input() genreType: string;


  /**
   *
   * This is to tell wether we want the genre name to be displayed or not
   * @type {boolean}
   * @memberof GenreRowComponent
   */
  @Input() showGenreName: boolean;


  /**
   *
   * ID of first book 
   * @memberof GenreRowComponent
   */
  bookId1;


  /**
   *
   * Id of second book 
   * @memberof GenreRowComponent
   */
  bookId2;


  /**
   *
   * ID of third book 
   * @memberof GenreRowComponent
   */
  bookId3;


  /**
   *
   * Name of first book 
   * @memberof GenreRowComponent
   */
  bookName1;


  /**
   *
   * Name of second book 
   * @memberof GenreRowComponent
   */
  bookName2;


  /**
   *
  * Name of third book 
   * @memberof GenreRowComponent
   */
  bookName3;
  /**
   * book image 1
   * @memberof GenreRowComponent
   */
  bookImage1;

  /**
   * book image 2
   * @memberof GenreRowComponent
   */
  bookImage2;

  /**
   *
   * book image 3
   * @memberof GenreRowComponent
   */
  bookImage3;

  /**
   * Row object created to fill data
   * @type {Row}
   * @memberof GenreRowComponent
   */
  RowObj: Row[];

  /**
   * Subscription
   * @private
   * @type {Subscription}
   * @memberof GenreRowComponent
   */
  private subprofile: Subscription;


  /**
   * Creates an instance of GenreRowComponent.
   * @param {RowServices} rowServicesObj
   * @memberof GenreRowComponent
   */
  constructor(private rowServicesObj: RowServices) { }

  /**
   * conatins all the function in service class and we assign here the values
   * @memberof GenreRowComponent
   */
  ngOnInit() {
    this.rowServicesObj.get_row(this.genreType);
    this.subprofile = this.rowServicesObj.get_row_updated().subscribe((RowData: Row[]) => {
      this.RowObj = RowData;
      this.bookImage1 = this.RowObj[0].Cover;
      this.bookImage2 = this.RowObj[1].Cover;
      this.bookImage3 = this.RowObj[2].Cover;
      this.bookId1 = this.RowObj[0].BookId;
      this.bookId2 = this.RowObj[1].BookId;
      this.bookId3 = this.RowObj[2].BookId;
      this.bookName1 = this.RowObj[0].Title;
      this.bookName2 = this.RowObj[1].Title;
      this.bookName3 = this.RowObj[2].Title;




    });
  }
}
