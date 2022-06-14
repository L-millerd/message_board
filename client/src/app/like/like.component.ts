import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() likes:number =0;
  @Input() isLiked:boolean=false;


  like(){
    // if(this.isLiked){
    //   this.totalLikes--;
    // }
    // else
    //   this.totalLikes++;

    this.isLiked = !this.isLiked;
    if(this.isLiked) this.likes++;
    else this.likes--;

    // if(this.isLiked == false)
    // this.isLiked = true;
    // else
    // this.isLiked = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
