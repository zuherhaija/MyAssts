import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
  title: 'My First Angualr Project',
  isFavorite : false
  };

  tweet = {
    totalLikes : 10,
    isLike: false
  };
  vote = {
    voteCount : 10,
    myVote: 0
  };
  onFavoriteChange() {
  console.log('hi');
}
onLikeChange() {
  console.log('hi');
}
onVoteChange($event) {
  console.log('hi');
}


}
