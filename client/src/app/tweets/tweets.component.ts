import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweets.interface';
import { TweetServiceService } from '../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  // tweets: Tweet[] = [];
  tweets: any[] = [];
  id:number;
  profilepic: any;
  username: any;
  twitterhandle: any;
  feed: string = '';
  comments: number = 0;
  retweets: number = 0;
  likes: number = 0;
  userID: any;
  userInfo: any[]=[];


  constructor(private ts:TweetServiceService, private route:ActivatedRoute) { }

  addTweet(){
    this.ts.addTweet(this.profilepic, this.username, this.twitterhandle, this.feed, this.comments, this.retweets, this.likes).subscribe( newTweet =>{
      // console.log(newTweet.newtweet[0]);
      this.tweets.unshift(newTweet.newtweet[0]);
      this.feed = '';
    })
  }

  ///Trial
  // loadTweet(id:number){
  //   this.ts.loadTweet(id).subscribe( singleTweet =>{
  //     console.log("singletweet", singleTweet);
  //   })
  // }
  logout(){
    localStorage.clear();
  }


  ngOnInit(): void {
    this.ts.getAllTweets().subscribe( allTweets =>{
      // console.log("onINit", allTweets);
      this.tweets = allTweets.alltweets;
      console.log("this tweets", this.tweets);
    })
    ///doesn't work?
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    console.log("userinfo", this.userInfo);
    ////

    this.userID = JSON.parse(localStorage.getItem('userID') || '{}');
    this.profilepic = JSON.parse(localStorage.getItem('profilepic') || '{}');
    this.username = JSON.parse(localStorage.getItem('username') || '{}');
    this.twitterhandle = JSON.parse(localStorage.getItem('twitterhandle') || '{}');
  }

}
