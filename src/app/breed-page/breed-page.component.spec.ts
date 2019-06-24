import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedPageComponent } from './breed-page.component';

describe('BreedPageComponent', () => {
  let component: BreedPageComponent;
  let fixture: ComponentFixture<BreedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
