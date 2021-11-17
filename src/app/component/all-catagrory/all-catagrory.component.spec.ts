import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatagroryComponent } from './all-catagrory.component';

describe('AllCatagroryComponent', () => {
  let component: AllCatagroryComponent;
  let fixture: ComponentFixture<AllCatagroryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCatagroryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatagroryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
