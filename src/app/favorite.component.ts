// tslint:disable-next-line: import-spacing
import {Component, Input, Output, EventEmitter} from  '@angular/core';




@Component({
// tslint:disable-next-line: component-selector
    selector : 'favorite',
    template : `
    <i class="glyphicon "
    [class.glyphicon-star-empty]="!isFavorite"
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()">
    `
  })
export class FavoriteComponent {
  @Input()  isFavorite = false ;
 @Output()  change = new EventEmitter();
onClick() {
    this.isFavorite = ! this.isFavorite;
    this.change.emit({newVlaue: this.isFavorite} );
}

}
