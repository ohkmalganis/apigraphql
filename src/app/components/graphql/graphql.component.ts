import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {

  public artists;

  constructor(
    private apollo: Apollo,
    private service: GraphqlService
  ) { }

  ngOnInit() {
    this.service.getOwners().then((res) => {
      console.log(res);
      this.artists = res;
    })
  }
}
