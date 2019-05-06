import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommentsDetails } from './reviews-comments.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

// tslint:disable-next-line:class-name
export class CommentsDetails_Service {
    /**
     * Creates an instance of BookTitle_Service.
     * @param {HttpClient} http
     * @memberof BookTitle_Service
     */
    constructor(private http: HttpClient) { }

// tslint:disable-next-line: variable-name
/**
 *
 * vairable list used to carry comments list
 * @private
 * @type {CommentsDetails[]}
 * @memberof CommentsDetails_Service
 */
private comments_details: CommentsDetails[] = [];

// tslint:disable-next-line: variable-name
/**
 *
 * variable used to get comments updated
 * @private
 * @memberof CommentsDetails_Service
 */
private comments_detailsUpdated = new Subject<CommentsDetails[]>();
/**
 *
 * function used to get request of the comments
 * @memberof CommentsDetails_Service
 */
get_comments_Info() {
        this.http.get<{ message: string, comments_details: CommentsDetails[] }>('http://localhost:3000/api/reviewcomments').
            // tslint:disable-next-line:variable-name
            subscribe((commentsdata) => {
                this.comments_details = commentsdata.comments_details;
                this.comments_detailsUpdated.next([...this.comments_details]);
            });
    }
    /**
     *
     * function used to get updated comments
     * @returns
     * @memberof CommentsDetails_Service
     */
    get_comments_Info_updated() {
        return this.comments_detailsUpdated.asObservable();
    }
    post_Review() {
// tslint:disable-next-line: max-line-length
        const UserToken = {
            Body: 'afaassssssssssssssssssssssssssa',
            ReviewId: '112312313131',
            BookId: '42423424242',
            userId: '1231313',
            Photo: '242342342',
            token: '242424242',
            LikesCount: '0',
            date: '12313131'
        };
        this.http.post<{ message: string}>('http://localhost:3000/api/reviewcomments', UserToken).
        subscribe(responseData => {          //  subscribe the list of books recieved
        console.log(responseData);    // assign them to the list to display them
        //this.comments_detailsUpdated.next([...this.comments_details]);
        });
    }
}
