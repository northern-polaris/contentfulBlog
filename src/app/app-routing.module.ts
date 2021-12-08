import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogpostListComponent} from "./blogposts/blogpost-list/blogpost-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: BlogpostListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
