import {Injectable} from '@angular/core';
import {createClient, Entry} from "contentful";

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: "tlqfiok8qhck",
    accessToken: "KQ17Gazu9xSq2yNvwDDOASVkxTvF55SOAkE0_6BRzmY",
    host: "cdn.contentful.com",
    environment: "test"
  });

  constructor() {
  }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query))
      .then(res => res.items);
  }
}
