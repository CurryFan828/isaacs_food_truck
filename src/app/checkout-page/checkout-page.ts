import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.html',
  styleUrls: ['./checkout-page.css']
})
export class CheckoutPage {
  @Input() cart!: Cart;
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  totalItems = 0;
  totalPrice = 0;

  showCardForm = false;

  cardNumber = '';
  expiry = '';
  cvv = '';

  ngOnChanges() {
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalItems = this.cart.items.reduce((sum, i) => sum + i.quantity, 0);
    this.totalPrice = this.cart.totalPrice;
  }

  proceedToPayment() {
    this.showCardForm = true;
  }

  confirmOrder() {
    if (this.validateCard()) {
      alert('Order confirmed! Thank you for your purchase.');
      this.close.emit();
      // optionally route to home page
      // this.router.navigate(['/']);
    } else {
      alert('Please enter valid credit card information.');
    }
  }

  validateCard(): boolean {
    // Simple checks: length, numbers only, basic patterns

    const cardNumClean = this.cardNumber.replace(/\s+/g, '');
    if (!/^\d{16}$/.test(cardNumClean)) return false;
    if (!/^\d{2}\/\d{2}$/.test(this.expiry)) return false;
    if (!/^\d{3,4}$/.test(this.cvv)) return false;

    return true;
  }
}
