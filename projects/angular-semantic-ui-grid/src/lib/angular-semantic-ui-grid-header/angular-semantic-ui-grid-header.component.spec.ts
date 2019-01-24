import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSemanticUiGridHeaderComponent } from './angular-semantic-ui-grid-header.component';

describe('AngularSemanticUiGridHeaderComponent', () => {
  let component: AngularSemanticUiGridHeaderComponent;
  let fixture: ComponentFixture<AngularSemanticUiGridHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSemanticUiGridHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSemanticUiGridHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
