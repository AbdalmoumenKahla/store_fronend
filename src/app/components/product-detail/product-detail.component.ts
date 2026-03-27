import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, CartService } from '../../services';
import { Product } from '../../models';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, QuantitySelectorComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  quantity = 1;
  loading = true;
  error: string | null = null;
  addedToCart = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProduct(id).subscribe({
        next: (product) => {
          if (product) {
            this.product = product;
          } else {
            this.error = 'Product not found';
          }
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load product';
          console.error(err);
          this.loading = false;
        }
      });
    }
  }

  onAddToCart(quantity: number): void {
    if (this.product) {
      alert(`${this.product.name} has been added to the cart (Quantity: ${quantity}).`);
      this.cartService.addToCart(this.product, quantity);
      this.addedToCart = true;
      setTimeout(() => {
        this.addedToCart = false;
      }, 3000);
    }
  }

  onQuantityChange(newQuantity: number): void {
    this.quantity = newQuantity;
  }
}
