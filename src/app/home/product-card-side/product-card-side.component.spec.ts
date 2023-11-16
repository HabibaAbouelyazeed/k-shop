import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSideComponent } from './product-card-side.component';

describe('ProductCardSideComponent', () => {
  let component: ProductCardSideComponent;
  let fixture: ComponentFixture<ProductCardSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardSideComponent]
    });
    fixture = TestBed.createComponent(ProductCardSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
