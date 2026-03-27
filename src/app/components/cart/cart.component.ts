import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services';
import { CartItem } from '../../models';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  removeItem(productId: number): void {
    const product = this.cartItems.find(item => item.product.id === productId);
    if (product) {
      alert(`${product.product.name} has been removed from the cart.`);
    }
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(data: { productId: number; quantity: number }): void {
    const product = this.cartItems.find(item => item.product.id === data.productId);
    if (product && data.quantity > 0) {
      alert(`${product.product.name} quantity has been updated to ${data.quantity}.`);
      this.cartService.updateQuantity(data.productId, data.quantity);
    }
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear the cart?')) {
      if (this.cartItems.length > 0) {
        alert('Cart has been cleared.');
      }
      this.cartService.clearCart();
    }
  }
}
