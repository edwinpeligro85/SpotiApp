import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ) );
  }

  getArtist( termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ) );
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCJRWp-AAu2ypiUobOxJK0bhNj8m-Wq2rk_1i3mYvaTnlH3BUKhIVL2MkI0xlJrU6BPTK9S6ssc_PBWu3M'});

    return this.http.get(url, { headers } );
  }
}
