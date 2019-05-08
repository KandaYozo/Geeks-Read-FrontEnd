
/**
 * This is the interface of one row of books
 * @export
 * @interface Row
 */
export class Row {

  /**
   *
   *Book ID
   * @memberof Row
   */
  BookId;

  /**
   *
   * Title of the book 
   * @memberof Row
   */
  Title;

  /**
   *
   * Id of the author
   * @memberof Row
   */
  AuthorId;

  /**
   *
   * The international serial book number
   * @memberof Row
   */
  ISBN;

  /**
   *
   * Published
   * @memberof Row
   */
  Published;

  /**
   *
   * The name of the book publisher
   * @memberof Row
   */
  Publisher;

  /**
   *
  * the number of pages of the book 
   * @memberof Row
   */
  Pages;

  /**
   *
   * Description of the book 
   * @memberof Row
   */
  Description;

  /**
   *
   * The image of the book cover 
   * @memberof Row
   */
  Cover;

  /**
   *
   * the store where the book belongs to
   * @memberof Row
   */
  Store;

  /**
   *
   * The read status whether it s read/ currently reading/want to read
   * @memberof Row
   */
  ReadStatus;

  /**
   *
   * the ratings of the book 
   * @memberof Row
   */
  BookRating;
}
