import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GET_PAGES } from '../../reducers/debugger';



@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.css']
})
export class DebuggerComponent implements OnInit {


  debugger: Observable<any>;

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.debugger = this.store.select('pageDebugger');
    this.store.dispatch({
      type: GET_PAGES,
      payload: null,
    });
  }

  selectPage(page) {
    alert('ola');
    this.store.dispatch({
      type: 'SELECT_PAGE',
      payload: { page }
    });
  }

}
