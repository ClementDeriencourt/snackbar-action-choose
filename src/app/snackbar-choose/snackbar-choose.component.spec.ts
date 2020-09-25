import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarChooseComponent } from './snackbar-choose.component';

describe('SnackbarChooseComponent', () => {
  let component: SnackbarChooseComponent;
  let fixture: ComponentFixture<SnackbarChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
