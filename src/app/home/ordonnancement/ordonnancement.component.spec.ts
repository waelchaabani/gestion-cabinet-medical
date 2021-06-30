import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancementComponent } from './ordonnancement.component';

describe('OrdonnancementComponent', () => {
  let component: OrdonnancementComponent;
  let fixture: ComponentFixture<OrdonnancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdonnancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
