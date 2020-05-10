import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactdisplayComponent } from './reactdisplay.component';

describe('ReactdisplayComponent', () => {
  let component: ReactdisplayComponent;
  let fixture: ComponentFixture<ReactdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
