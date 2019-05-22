

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class PostService {
private _url ='https://jsonplaceholder.typicode.com/posts';
constructor(private _http: HttpClient) {

}
getPost() {
  return this._http.get (this._url)
  map (res => res.json () );
}

}
