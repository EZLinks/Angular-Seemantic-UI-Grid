import { NgModule } from '@angular/core';
import { AngularSemanticUiGridComponent } from './angular-semantic-ui-grid/angular-semantic-ui-grid.component';
import { SuiSelectModule, SuiPaginationModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { AngularSemanticUiGridHeaderComponent } from './angular-semantic-ui-grid-header/angular-semantic-ui-grid-header.component';
import { FooterDirective } from './directives/footer/footer.directive';
import { BodyDirective } from './directives/body/body.directive';

@NgModule({
  declarations: [
    AngularSemanticUiGridComponent,
    AngularSemanticUiGridHeaderComponent,
    FooterDirective,
    BodyDirective
  ],
  imports: [
    CommonModule,
    [
      SuiSelectModule,
      SuiPaginationModule
    ]
  ],
  exports: [
    AngularSemanticUiGridComponent,
    FooterDirective,
    BodyDirective
  ]
})
export class AngularSemanticUiGridModule { }
