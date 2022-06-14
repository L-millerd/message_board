import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { MenuComponent } from './menu/menu.component';
import { RecoComponent } from './reco/reco.component';
import { LikeComponent } from './like/like.component';
import { RetweetComponent } from './retweet/retweet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditTweetComponent } from './edit-tweet/edit-tweet.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    MenuComponent,
    RecoComponent,
    LikeComponent,
    RetweetComponent,
    EditTweetComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
