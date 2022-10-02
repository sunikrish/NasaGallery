import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogueComponent } from './dilogue.component';

describe('DilogueComponent', () => {
  let component: DilogueComponent;
  let fixture: ComponentFixture<DilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
