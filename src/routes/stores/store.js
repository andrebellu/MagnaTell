import { writable } from 'svelte/store';

export const recipes = writable([]);

export const recipesFound = writable([]);

export const searched = writable([]);

export const pressed = writable();

export const categories = writable([]);

export const myRecipes = writable([]);

export const myRecipesHandlers = {
    addRecipe: async (recipe) => {
        recipes.update((recipes) => {
            recipes.push(recipe);
            return recipes;
        });
    }
};
