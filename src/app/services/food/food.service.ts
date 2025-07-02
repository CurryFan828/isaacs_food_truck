import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(): string[] {
    return [
      '/assets/foods/drink-1.jpg',
      '/assets/foods/food-1.jpg',
      '/assets/foods/food-2.jpg',
      '/assets/foods/food-3.jpg',
      '/assets/foods/food-4.jpg',
      '/assets/foods/food-5.jpg',
      '/assets/foods/food-6.jpg'
    ];
  }
}
