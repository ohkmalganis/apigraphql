import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ApirestComponent } from './components/apirest/apirest.component';
import { GraphqlComponent } from './components/graphql/graphql.component';

import { PostComponent } from './components/apirest/post/post.component';
import { PutComponent } from './components/apirest/put/put.component';
import { PatchComponent } from './components/apirest/patch/patch.component';
import { DeleteComponent } from './components/apirest/delete/delete.component';

const appRoutes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'apirest', component: ApirestComponent },
    { path: 'apirest/post', component: PostComponent },
    { path: 'apirest/put', component: PutComponent },
    { path: 'apirest/patch', component: PatchComponent },
    { path: 'apirest/delete', component: DeleteComponent },
    { path: 'graphql', component: GraphqlComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);