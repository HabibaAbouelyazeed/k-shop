import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardMainComponent } from './product-card-main.component';

describe('ProductCardMainComponent', () => {
  let component: ProductCardMainComponent;
  let fixture: ComponentFixture<ProductCardMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardMainComponent]
    });
    fixture = TestBed.createComponent(ProductCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
