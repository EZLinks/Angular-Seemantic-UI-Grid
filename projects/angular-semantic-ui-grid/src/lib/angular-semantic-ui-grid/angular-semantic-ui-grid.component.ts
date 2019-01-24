import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { Header } from '../models/header.model';
import { Subject } from 'rxjs';
import { Filter } from '../models/filter.model';
import { Settings } from '../models/settings.model';
import { Sort } from '../models/sort.model';
import { SortDirection } from '../enums/sortDirection.enum';
import { BodyDirective } from '../directives/body/body.directive';
import { FooterDirective } from '../directives/footer/footer.directive';

@Component({
  selector: 'angular-semantic-ui-grid',
  templateUrl: './angular-semantic-ui-grid.component.html',
  styleUrls: ['./angular-semantic-ui-grid.component.css']
})
export class AngularSemanticUiGridComponent implements OnInit {
  @Input()
  data: Array<any>;

  @Input()
  settings: Settings;

  @Input()
  selectedItem: any;

  @Output()
  searchMethod: EventEmitter<Array<Filter>> = new EventEmitter<Array<Filter>>();

  @Output()
  itemSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  doubleClick: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild(BodyDirective, { read: TemplateRef })
  bodyTemplate: TemplateRef<any>;

  @ContentChild(FooterDirective, { read: TemplateRef })
  footerTemplate: TemplateRef<any>;

  gridResults: Array<any>;

  gridSearch = new Subject();

  searchFields: Array<Filter>;

  constructor() {
  }

  ngOnInit() {
    this.searchFields = new Array<Filter>();

    setTimeout(() => this.searchMethod.emit(this.searchFields));
  }

  onSearchChange = ($event: Filter) => {
    let foundSearchField = this.searchFields.find(f => f.header === $event.header);
    if (foundSearchField) {
      foundSearchField.value = $event.value;
    } else {
      this.searchFields.push($event);
    }

    this.searchMethod.emit(this.searchFields);
  }

  select(row: any) {
    if (this.settings.isSelectable) {
      this.itemSelected.emit(row);
    }
  }

  pageChange($event: number) {
    this.settings.page = $event;
    this.searchMethod.emit(this.searchFields);
  }

  itemDoubleClicked() {
    this.doubleClick.emit();
  }

  sortRequest($event: Header) {
    if (this.settings.isSortable && ($event.canSort === undefined || $event.canSort)) {
      let foundSearchField = this.searchFields.find(f => f.header === $event);
      if (foundSearchField) {
        if (foundSearchField.direction === SortDirection.None) {
          foundSearchField.direction = SortDirection.Ascending;
        }
        else if (foundSearchField.direction === SortDirection.Ascending) {
          foundSearchField.direction = SortDirection.Descending;
        } else {
          foundSearchField.direction = SortDirection.None;
        }
      } else {
        this.searchFields.push({
          header: $event,
          direction: SortDirection.Ascending
        } as Filter);
      }
    }

    this.searchMethod.emit(this.searchFields);
  }
}
