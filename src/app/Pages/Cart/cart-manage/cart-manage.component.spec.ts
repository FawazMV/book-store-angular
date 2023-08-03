import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartManageComponent } from './cart-manage.component';

describe('CartManageComponent', () => {
  let component: CartManageComponent;
  let fixture: ComponentFixture<CartManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartManageComponent]
    });
    fixture = TestBed.createComponent(CartManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
