import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { ShoppingCart } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header{

  constructor(private cartService: CartService) {}
  
}
