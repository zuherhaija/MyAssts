// tslint:disable-next-line: import-spacing
import {Component} from  '@angular/core';
import {AuthorsService} from './authors.service';



@Component({
// tslint:disable-next-line: component-selector
    selector : 'authors',
    template : `
    <h3> Authors  <h3>
    {{title}}
    <ul>
        <li *ngFor= " let author of Authors" >
            {{author}}
        </li>
    </ul>`,
    providers: [AuthorsService]
})
export class AuthorComponent {

    title = 'Authors  Titel ';
    Authors  ;

    constructor(authorService: AuthorsService) {
        this.Authors = authorService.getAuthors();

    }
}
