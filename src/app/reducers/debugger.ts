import { Action, ActionReducer } from '@ngrx/store';
import { Page } from '../models/page';
import { PagesService } from '../services/pages.service';
import $ from 'jquery';

const pagesService = new PagesService();

export interface State {
  pages: Page[];
  pending: boolean;
  results: any;
}

const initialState = {
  pages: [],
  pending: false,
  results: null,
};

export const GET_PAGES = 'GET_PAGES';
export const GET_RESULTS = 'GET_RESULTS';

export function pageDebugger(state: State = initialState, action: Action): State {
  switch (action.type) {
    case GET_PAGES:
      return {
        ...state,
        pages: pagesService.getPages(),
      };
    case GET_RESULTS:
      return {
        ...state,
        results: determineContainer()
      };
    default:
      return state;
  }
}


function determineContainer() {
  // use here jquery
  const code = '<html>...</html>';
  const jquerifiedPage = $.parseHTML(code);
  const html = $('<div>').append(jquerifiedPage);
  // c = []
  // for i in $(html).children():
  //   c[1].element = i
  // c[0].count = $(i).children().length
  // for i in c:
  //   print c.element, c.count

  return html;

}
