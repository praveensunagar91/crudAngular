import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereactComponent } from './updatereact.component';

describe('UpdatereactComponent', () => {
  let component: UpdatereactComponent;
  let fixture: ComponentFixture<UpdatereactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatereactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
