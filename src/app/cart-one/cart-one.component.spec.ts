import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOneComponent } from './cart-one.component';

describe('CartOneComponent', () => {
  let component: CartOneComponent;
  let fixture: ComponentFixture<CartOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
