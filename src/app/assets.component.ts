// tslint:disable-next-line: import-spacing
import {Component} from  '@angular/core';
import {AssetsService} from './assets.service';



@Component({
// tslint:disable-next-line: component-selector
    selector : 'assets-media',
    template : `
    <h3> My Assets <h3>
    {{title}}
    <div>
    <input type="text" appAutoGrow />
    </div>
    <ul>
        <li *ngFor= " let asset of Assets" >
            {{asset}}
        </li>
    </ul>`,
    providers: [AssetsService]
  })
export class AssetComponent {

    title = 'Asset Titel ';
    Assets  ;

    constructor(assetService: AssetsService) {
        this.Assets = assetService.getAssets();

    }
}
