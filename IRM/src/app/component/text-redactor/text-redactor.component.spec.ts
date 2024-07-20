import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRedactorComponent } from './text-redactor.component';

describe('TextRedactorComponent', () => {
  let component: TextRedactorComponent;
  let fixture: ComponentFixture<TextRedactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRedactorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextRedactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
