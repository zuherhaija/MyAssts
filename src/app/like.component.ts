// tslint:disable-next-line: import-spacing
import {Component, Input, Output, EventEmitter} from  '@angular/core';




@Component({
// tslint:disable-next-line: component-selector
    selector : 'like',
    template : `
    <i class="glyphicon glyphicon-heart"
    [class.highlighted]="isLike"
    (click)="onClick()">
    </i>
<span>{{ totalLikes }} </span>
    `,
    styles : [`
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
  }

  .highlighted {
      color: deeppink;
  }
    `]
  })
export class LikeComponent {
  @Input()  isLike = false ;
  @Input()  totalLikes = 0 ;
  @Output()  change = new EventEmitter();
  onClick() {
    this.isLike = ! this.isLike;
    this.totalLikes += this.isLike ? 1 : -1 ;
    this.change.emit({newVlaue: this.isLike} );
}

}
