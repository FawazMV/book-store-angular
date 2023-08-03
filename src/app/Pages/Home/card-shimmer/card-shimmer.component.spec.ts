import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShimmerComponent } from './card-shimmer.component';

describe('CardShimmerComponent', () => {
  let component: CardShimmerComponent;
  let fixture: ComponentFixture<CardShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardShimmerComponent]
    });
    fixture = TestBed.createComponent(CardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
