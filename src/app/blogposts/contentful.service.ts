import {Injectable} from '@angular/core';
import {ContentfulCollection, createClient} from "contentful";

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private CONFIG = {
    space: "tlqfiok8qhck",
    accessToken: "KQ17Gazu9xSq2yNvwDDOASVkxTvF55SOAkE0_6BRzmY",
    host: "cdn.contentful.com",
    environment: "test"
  };
  private cdaClient = createClient(this.CONFIG);

  constructor() {
  }

  getPosts(query?: object): Promise<ContentfulCollection<any>> {
    query = {...query, limit: 3};
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query));
  }
}
