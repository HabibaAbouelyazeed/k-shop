import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductsListComponent } from './latest-products-list.component';

describe('LatestProductsListComponent', () => {
  let component: LatestProductsListComponent;
  let fixture: ComponentFixture<LatestProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestProductsListComponent]
    });
    fixture = TestBed.createComponent(LatestProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
