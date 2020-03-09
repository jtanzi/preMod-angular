import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SnippetComponent } from './components/snippet/snippet.component';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/snippet/:snippetId', component: SnippetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
