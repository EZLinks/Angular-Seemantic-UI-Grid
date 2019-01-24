import { Component } from '@angular/core';
import { Header, TextHeader, SelectHeader, HeaderType, Filter, Settings, SortDirection } from 'angular-semantic-ui-grid';
import { orderBy, slice } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-workspace';

  originalData = new Array<any>(
    {
      text: 'Tony Stark',
      number: 1,
      select: 3
    },
    {
      text: 'Luke Skywalker',
      number: 2,
      select: 2
    },
    {
      text: 'Harry Potter',
      number: 5,
      select: 1
    },
    {
      text: 'Tom Thumb',
      number: 3,
      select: 2
    }
  );

  data = new Array<any>();

  options = new Array<any>(
    { id: 0, label: 'None' },
    { id: 1, label: 'First' },
    { id: 2, label: 'Second' },
    { id: 3, label: 'Third' }
  );

  selectedItem: any;

  settings: Settings = {
    isSelectable: true,
    isSortable: true,
    page: 1,
    pageSize: 2,
    maxCollectionSize: this.originalData.length,
    //initialSelectedItem: this.originalData[1],
    headers: new Array<Header>(
      {
        label: 'Name',
        field: 'text',
        placeholder: 'Starts with...',
        type: HeaderType.Text
      } as TextHeader,
      {
        label: 'Number',
        type: HeaderType.None,
        field: 'number',
        canSort: false
      } as Header,
      {
        label: 'Select',
        options: this.options,
        optionLabel: 'label',
        optionId: 'id',
        field: 'select',
        type: HeaderType.Select,
        placeholder: 'Select'
      } as SelectHeader
    )
  } as Settings;

  searchMethod = ($event: Array<Filter>) => {
    let data = this.originalData;

    let sorts = [];
    let orders = [];

    this.settings.headers.forEach((header: Header) => {
      let value = $event.find(e => e.header.field == header.field);

      if (value) {
        if (value.value) {
          switch (header.type) {
            case HeaderType.Text:
              data = data.filter(d => d[header.field].startsWith(value.value));
              break;
            case HeaderType.Select:
              data = data.filter(d => d[(header as SelectHeader).optionId] === value.value);
              break;
          }
        }

        switch (value.direction) {
          case SortDirection.Ascending:
            sorts.push(header.field);
            orders.push('asc');
            break;
          case SortDirection.Descending:
            sorts.push(header.field);
            orders.push('desc');
            break;
        }
      }
    });

    $event.forEach((filter: Filter) => {
      this.settings.headers.find((header: Header) => header === filter.header).sortDirection = filter.direction;
    });

    data = orderBy(data, sorts, orders);
    this.data = slice(data, (this.settings.page - 1) * this.settings.pageSize, (this.settings.page - 1) * this.settings.pageSize + this.settings.pageSize);

    if (data.length != this.settings.maxCollectionSize) {
      this.settings.page = 1;
      this.settings.maxCollectionSize = data.length;
    }
  }

  onItemSelected = (row: any) => {
    this.selectedItem = row;
  }

  onItemDoubleClick = (row: any) => {
    console.log(`${this.selectedItem.text} was double clicked.`);
  }

  getContent(header: Header, datum: any) {
    if (header.field === 'select') {
      return this.options.find(o => o.id === datum[header.field]).label;
    }

    return datum[header.field];
  }
}
