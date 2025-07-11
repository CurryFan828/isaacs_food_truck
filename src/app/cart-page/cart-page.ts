import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';


@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPage implements OnInit{

  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart()
   }

  ngOnInit(): void {
    
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); 
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart()
  }

}
