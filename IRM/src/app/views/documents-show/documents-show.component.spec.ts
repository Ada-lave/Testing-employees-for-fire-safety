import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsShowComponent } from './documents-show.component';

describe('DocumentsShowComponent', () => {
  let component: DocumentsShowComponent;
  let fixture: ComponentFixture<DocumentsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
