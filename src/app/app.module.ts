import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ApirestComponent } from './components/apirest/apirest.component';
import { GraphqlComponent } from './components/graphql/graphql.component';
import { PostComponent } from './components/apirest/post/post.component';
import { PutComponent } from './components/apirest/put/put.component';
import { PatchComponent } from './components/apirest/patch/patch.component';
import { DeleteComponent } from './components/apirest/delete/delete.component';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ApirestComponent,
    GraphqlComponent,
    PostComponent,
    PutComponent,
    PatchComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
