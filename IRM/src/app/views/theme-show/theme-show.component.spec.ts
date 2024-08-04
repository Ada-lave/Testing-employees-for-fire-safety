import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeShowComponent } from './theme-show.component';

describe('ThemeShowComponent', () => {
  let component: ThemeShowComponent;
  let fixture: ComponentFixture<ThemeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
