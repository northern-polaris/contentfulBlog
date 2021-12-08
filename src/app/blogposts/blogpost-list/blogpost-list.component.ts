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

  products: Entry<any>[] = [];

  ngOnInit() {
    this.contentfulService.getProducts()
      .then(products => {
        this.products = products;
        console.log(products)
      })
  }

}
