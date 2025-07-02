import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [CommonModule],
  standalone: true
})
export class HomeComponent implements OnInit {

  foods: String[] = [];
  constructor(private food: FoodService) { }

  ngOnInit(): void {
      // Initialization logic can go here
      this.foods = this.food.getAllFoods();
  }
}
