import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../models';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() removeItem = new EventEmitter<number>();
  @Output() updateQuantity = new EventEmitter<{ productId: number; quantity: number }>();

  onRemove(): void {
    this.removeItem.emit(this.cartItem.product.id);
  }

  onQuantityChange(quantity: number): void {
    if (quantity > 0) {
      this.updateQuantity.emit({ productId: this.cartItem.product.id, quantity });
    }
  }
}
