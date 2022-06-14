import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tweet } from '../interfaces/tweets.interface'

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  private url = "http://localhost:4400/tweets"
  private editURL = "http://localhost:4400/edit-tweets"
  private getURL = "http://localhost:4400/get-tweets"
  private deleteURL = "http://localhost:4400/delete-tweets"
  private loadTweetURL = "http://localhost:4400/load-tweet"

  constructor(private http: HttpClient) { }

  getAllTweets(){
    return this.http.get<{alltweets: [Tweet], message: any}>(this.url);
  }

  getTweetByID(id:number){
    return this.http.get<{getTweet: any, message: any}>(this.getURL + '/' + id)
  }


  addTweet(profilepic:string, username:string, twitterhandle:string, feed:string, comments:number, retweets:number, likes:number){
    let newTweet =
      {
        "profilePic": profilepic,
        "userName":  username,
        "twitterHandle": twitterhandle,
        "feed": feed,
        "comments": comments,
        "retweets": retweets,
        "likes": likes
    }
    return this.http.post<{newtweet: [Tweet], message: any}>(this.url, newTweet);
  }

  editTweet(id:any, feed:string){
    let editTweet = {
      "feed": feed
    }
    return this.http.put<{editTweet: boolean, message: any}>(this.editURL + "/" + id, editTweet)
  }

  deleteTweet(id:any){
    return this.http.delete<{deleteTweet: boolean, message: any}>(this.deleteURL + "/" + id)
  }

  //trial
  // loadTweet(id:any){
  //   let body = {
  //     "id" : id
  //   }
  //   return this.http.get<{getTweet: any, message: any}>(this.loadTweetURL, body)
  // }

}

