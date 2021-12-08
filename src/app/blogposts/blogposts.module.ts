import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostsRoutingModule } from './blogposts-routing.module';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';


@NgModule({
  declarations: [
    BlogpostListComponent
  ],
  imports: [
    CommonModule,
    BlogpostsRoutingModule
  ]
})
export class BlogpostsModule { }
