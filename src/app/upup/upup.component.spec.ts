import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpupComponent } from './upup.component';

describe('UpupComponent', () => {
  let component: UpupComponent;
  let fixture: ComponentFixture<UpupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
