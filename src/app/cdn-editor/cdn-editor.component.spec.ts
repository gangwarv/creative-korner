import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdnEditorComponent } from './cdn-editor.component';

describe('CdnEditorComponent', () => {
  let component: CdnEditorComponent;
  let fixture: ComponentFixture<CdnEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdnEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdnEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
