import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from '../models/header.model';
import { HeaderType } from '../enums/headerType.enum';
import { Filter } from '../models/filter.model';
import { SortDirection } from '../enums/sortDirection.enum';
import { TextHeader } from '../models/textHeader.model';

@Component({
  selector: 'angular-semantic-ui-grid-header',
  templateUrl: './angular-semantic-ui-grid-header.component.html',
  styleUrls: ['./angular-semantic-ui-grid-header.component.css']
})

export class AngularSemanticUiGridHeaderComponent implements OnInit {
  @Input()
  header: Header;

  @Output()
  onSearchChange: EventEmitter<any> = new EventEmitter<any>();

  headerType = HeaderType;

  sortDirection = SortDirection;

  constructor() { }

  ngOnInit() {
  }

  onSearchInput(header: Header, value: any) {
    this.onSearchChange.emit({ header, value } as Filter);
  }

  getSortDirection(header: Header) {
    switch (header.sortDirection) {
      case SortDirection.Ascending:
        return 'caret up icon';
      case SortDirection.Descending:
        return 'caret down icon';
      default:
        return '';
    }
  }
}
