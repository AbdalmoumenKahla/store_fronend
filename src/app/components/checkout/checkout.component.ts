import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services';
import { CartItem } from '../../models';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  cartItems: CartItem[] = [];
  cartTotal = 0;
  submitted = false;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });

    this.initForm();
  }

  initForm(): void {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', [Validators.required, Validators.minLength(2)]],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5,}$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{13,19}$/)]],
      cardExpiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cardCvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  submitCheckout(): void {
    this.submitted = true;

    if (this.checkoutForm.invalid || this.cartItems.length === 0) {
      return;
    }

    this.processing = true;

    // Simulate payment processing
    setTimeout(() => {
      const order = {
        id: Date.now().toString(),
        customerName: `${this.checkoutForm.value.firstName} ${this.checkoutForm.value.lastName}`,
        customerEmail: this.checkoutForm.value.email,
        items: this.cartItems,
        total: this.cartTotal,
        orderDate: new Date()
      };

      // Save order and clear cart
      sessionStorage.setItem('lastOrder', JSON.stringify(order));
      this.cartService.clearCart();
      
      this.processing = false;
      this.router.navigate(['/order-confirmation']);
    }, 2000);
  }

  goBack(): void {
    this.router.navigate(['/cart']);
  }
}
