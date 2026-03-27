import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  @Input() quantity!: number;
  @Input() productName!: string;
  @Output() addToCart = new EventEmitter<number>();
  @Output() quantityChange = new EventEmitter<number>();

  onAddToCart(): void {
    this.addToCart.emit(this.quantity);
  }

  incrementQuantity(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
