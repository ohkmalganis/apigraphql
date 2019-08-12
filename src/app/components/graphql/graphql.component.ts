import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course, Query } from '../../config';
import gql from 'graphql-tag';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.theFunction();
  }

  theFunction()
  {
    this.courses = this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allCourses)
      );
  }
}
