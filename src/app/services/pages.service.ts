import { Injectable } from '@angular/core';
import { Page } from '../models/page';

@Injectable()
export class PagesService {

  constructor() { }

  getPages(): Page[] {
    const hackerNews = {
      name: 'Hacker News',
      html: 'this is my code',
    };
    return [hackerNews];
  }

}
