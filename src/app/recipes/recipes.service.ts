import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'data:image/jpeg;base64,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',
      ingredients: ['French Fries', 'Prok Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.fivehearthome.com/wp-content/uploads/2019/03/One-Pot-Spaghetti-Recipe-by-Five-Heart-Home_700pxShortCollage.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [ ...this.recipes ];
  }

  getRecipe(recipeId: string): Recipe {
    return { ...this.recipes.find( recipe => recipe.id === recipeId ) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter( recipe => recipe.id !== recipeId);
  }
}
