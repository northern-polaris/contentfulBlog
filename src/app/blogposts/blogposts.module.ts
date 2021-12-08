import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogpostListComponent} from './blogpost-list/blogpost-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    BlogpostListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class BlogpostsModule {
}
