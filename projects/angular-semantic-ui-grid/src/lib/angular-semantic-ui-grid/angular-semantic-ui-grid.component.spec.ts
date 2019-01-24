import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSemanticUiGridComponent } from './angular-semantic-ui-grid.component';

describe('AngularSemanticUiGridComponent', () => {
  let component: AngularSemanticUiGridComponent;
  let fixture: ComponentFixture<AngularSemanticUiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularSemanticUiGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSemanticUiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
