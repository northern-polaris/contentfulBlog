import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss']
})
export class BlogpostListComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) {
  }

  posts: Entry<any>[] = [];

  ngOnInit() {
    this.contentfulService.getPosts()
      .then(posts => {
        this.posts = posts;
        console.log(posts)
      })
  }

  getImageUrl(p: Entry<any>): string {
    return p.fields.heroImage.fields.file.url
  }}
