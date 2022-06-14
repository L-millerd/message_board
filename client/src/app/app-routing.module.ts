import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';
import { EditTweetComponent } from './edit-tweet/edit-tweet.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: TweetsComponent},
  {path: 'get-tweets/:id', component: EditTweetComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
