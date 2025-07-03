import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Search } from "../search/search";
import { Tags } from '../tags/tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, Search, Tags],
  standalone: true
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to the route parameters to get the search term
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
        } else if(params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
        } else {
        this.foods = this.foodService.getAllFoods();
        }
    });
  }

  increment(food: Food) {
    food.quantity = (food.quantity || 0) + 1;
  }

  decrement(food: Food) {
    if ((food.quantity || 0) > 0) {
      food.quantity = (food.quantity || 0) - 1;
    }
  }

  toggleFavorite(food: Food) {
    food.favorite = !food.favorite;
  }
}
