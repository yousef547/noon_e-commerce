import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNavComponent } from './part-nav.component';

describe('PartNavComponent', () => {
  let component: PartNavComponent;
  let fixture: ComponentFixture<PartNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
