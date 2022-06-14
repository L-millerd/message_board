import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetServiceService } from '../services/tweet-service.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.scss']
})
export class EditTweetComponent implements OnInit {
tweet:string = '';
editSuccess: boolean = false;
editMessage: string = "none";
deleteSuccess: boolean = false;
deleteMessage: string = "none";

  constructor(private ts: TweetServiceService, private route:ActivatedRoute) { }


  updateTweet(){
    let id:any = this.route.snapshot.paramMap.get("id");
    this.ts.editTweet(id, this.tweet).subscribe( response =>{
      this.editSuccess = response.editTweet;
      this.editMessage = "display";
      console.log(response.editTweet);
    })
  }

  deleteTweet(){
    let deleteID:any = this.route.snapshot.paramMap.get("id");
    this.ts.deleteTweet(deleteID).subscribe(response =>{
      console.log("hello", response);
      this.deleteMessage = "display"
      this.deleteSuccess = response.deleteTweet;
    })
  }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.ts.getTweetByID(id).subscribe( response =>{
      let sentTweet = response.getTweet;
      this.tweet = sentTweet.feed
      console.log(this.tweet);
    });
  }

}
