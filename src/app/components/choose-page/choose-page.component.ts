import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/page';


@Component({
  selector: 'app-choose-page',
  templateUrl: './choose-page.component.html',
  styleUrls: ['./choose-page.component.css']
})
export class ChoosePageComponent implements OnInit {

  @Input() pages: Page[];
  @Output() selectPage = new EventEmitter<Page>();

  constructor() { }

  ngOnInit() {
  }


}
