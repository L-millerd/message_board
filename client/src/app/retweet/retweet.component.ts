import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'retweet',
  templateUrl: './retweet.component.html',
  styleUrls: ['./retweet.component.scss']
})
export class RetweetComponent implements OnInit {

  isRetweeted = false;
  @Input() totalRetweets: any = 0;

  retweet(){
    if(this.isRetweeted){
      this.totalRetweets--;
    }
    else{
      this.totalRetweets++;
    }
    this.isRetweeted = !this.isRetweeted;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
