import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Artists } from '../../config/';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  
  public artists: Artists[];

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ 
        uri: 'https://spotify-graphql-server.herokuapp.com/graphql', 
        withCredentials: false,
        method: 'POST'
      }),
      cache: new InMemoryCache()
    })
  }

  public getOwners = () => {
    return new Promise((res, rej) => {
      this.apollo.query({
        query: gql`query {
        queryArtists(byName: "Linkin Park") {
          id
          name
          image
        }
      }`
      }).subscribe(result => {
        this.artists = result.data as Artists[];
        res(this.artists);
      });
    });
    
  }
}