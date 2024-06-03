import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopitaComponent } from './ropita.component';

describe('RopitaComponent', () => {
  let component: RopitaComponent;
  let fixture: ComponentFixture<RopitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopitaComponent]
    });
    fixture = TestBed.createComponent(RopitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
