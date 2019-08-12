import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirestComponent } from './apirest.component';

describe('ApirestComponent', () => {
  let component: ApirestComponent;
  let fixture: ComponentFixture<ApirestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApirestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApirestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
