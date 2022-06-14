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
  profilepic: string = 'assets/profilepics/profile1.jpg';
  username: string = 'new user';
  twitterhandle: string ='@newuser';
  feed: string = '';
  comments: number = 0;
  retweets: number = 0;
  likes: number = 0;

  constructor(private ts:TweetServiceService, private route:ActivatedRoute) { }

  addTweet(){
    this.ts.addTweet(this.profilepic, this.username, this.twitterhandle, this.feed, this.comments, this.retweets, this.likes).subscribe( newTweet =>{
      console.log(newTweet.newtweet[0]);
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


  ngOnInit(): void {
    this.ts.getAllTweets().subscribe( allTweets =>{
      console.log("onINit", allTweets);
      this.tweets = allTweets.alltweets;
      console.log("this tweets", this.tweets);
    })
  }

}
