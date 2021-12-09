import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss']
})
export class BlogpostListComponent implements OnInit {

  posts: Entry<any>[] = [];
  loadPosts: any[] = [];
  currentLoadedPosts: Entry<any>[] = [];
  totalItems = 0;

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(queryParam?: object) {
    this.contentfulService.getPosts(queryParam)
      .then(res => {
        const posts = res.items;
        this.posts = posts;
        this.currentLoadedPosts = [...this.currentLoadedPosts, ...posts.slice(0, 3)];
        this.totalItems = res.total;
      })
  }

  getImageUrl(p: Entry<any>): string {
    return p.fields.previewImage.fields.file.url
  }

  load() {
    const loadedItems = this.currentLoadedPosts.length;
    if (loadedItems < this.totalItems) {
      this.getPosts({skip: loadedItems});
    }
  }

}
