import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogpostListComponent} from './blogpost-list/blogpost-list.component';
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    BlogpostListComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class BlogpostsModule {
}
