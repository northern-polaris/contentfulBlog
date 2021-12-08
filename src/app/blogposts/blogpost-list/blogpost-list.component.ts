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

  loadPosts: any[] = [];
  currentLoadedPosts: Entry<any>[] = [];
  contentfulPageSize = 100;
  currentPageItems = 0;

  ngOnInit() {
    this.getPosts();

  }

  getPosts(queryParam?: object) {
    this.contentfulService.getPosts(queryParam)
      .then(posts => {
        this.posts = posts;
        console.log(posts)
        this.currentPageItems = posts.length;
        this.currentLoadedPosts = posts.slice(0, 3);
      })
  }

  getImageUrl(p: Entry<any>): string {
    return p.fields.previewImage.fields.file.url
  }

  load() {
    const loadedItems = this.currentLoadedPosts.length;
    if (loadedItems === this.contentfulPageSize + 1) {
      this.getPosts({skip: loadedItems});
      window.alert(loadedItems)
      return
    }
    this.currentLoadedPosts = [...this.currentLoadedPosts, ...this.posts.slice(loadedItems, loadedItems + 3)]
  }

}
