import { Component, OnInit } from '@angular/core';

/**
 *
 * Genres Component
 * @export
 * @class GenresComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {


  /**
   *
   * Genre Type sent to the genrerow component 
   * @memberof GenresComponent
   */
  genreType1 = 'Thriller';


  /**
   * Genre Type sent to the genrerow component 
   * 
   * @memberof GenresComponent
   */
  genreType2 = 'Comedy';


  /**
   *
   * Genre Type sent to the genrerow component 
   * @memberof GenresComponent
   */
  genreType3 = 'Horror';
  /**
   *  Creates an instance of GenresComponent.
   *  @memberof GenresComponent
   */
  constructor() { 
    
  }

  
  /**
   *
   * Angular Init
   * @memberof GenresComponent
   */
  ngOnInit() { }
 
}
