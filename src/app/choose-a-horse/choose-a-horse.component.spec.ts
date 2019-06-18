import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAHorseComponent } from './choose-a-horse.component';

describe('ChooseAHorseComponent', () => {
  let component: ChooseAHorseComponent;
  let fixture: ComponentFixture<ChooseAHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
