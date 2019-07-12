import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HorseStableComponent } from './horse-stable.component';

describe('HorseStableComponent', () => {
  let component: HorseStableComponent;
  let fixture: ComponentFixture<HorseStableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseStableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseStableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
