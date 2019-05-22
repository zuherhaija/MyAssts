import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule , ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetComponent } from './assets.component';
import { AuthorComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VotingComponent } from './voting.component';
import { TweetComponent } from './tweet.component';
import { TweetsComponent } from './tweets.component';
import { LoginFormComponent } from './login.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CommonModule } from '@angular/common';
import { UsernameValidators } from './usernameValidators';


@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AuthorComponent,
    AutoGrowDirective,
    FavoriteComponent,
    LikeComponent,
    VotingComponent,
    TweetComponent,
    TweetsComponent,
    LoginFormComponent,
    HeroFormComponent

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
