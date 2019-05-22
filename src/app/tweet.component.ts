import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TweetService } from './tweet.service';


/**
 * 
 */
@Component({
    selector: 'tweet',
    template: `
    <div class="media">
    <div class="media-left">
      <a href="#">
        <img class="media-object" src="{{ data.imageUrl }}">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">
          {{ data.author }} <span class="handle">{{ data.handle }}</span>
      </h4>
      {{ data.body }}
      <div>
          <like [totalLikes]="data.totalLikes" [isLike]="data.iLike"></like>
      </div>
    </div>
  </div>    
      `,
      styles: [`
          .handle {
              color: #ccc;
          }
          
          .media {
              margin-bottom: 20px;
          }
          
          .media-object {
              border-radius: 10px;
          }
      `]
  })
  export class TweetComponent {
      constructor(){
          console.log(this.data);
      }
      @Input() data;
  }