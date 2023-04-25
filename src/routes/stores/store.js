import { writable } from 'svelte/store';

export const title_store = writable();
export const difficulty_store = writable();

export const recipes = writable([]);

export const recipesFound = writable([]);

export const searched = writable([]);

export const pressed = writable();

export const categories = writable([]);

export const myRecipes = writable([]);

export const mySavedRecipes = writable([]);

export const active = writable();

export const myRecipesHandlers = {
    addRecipe: async (recipe) => {
        recipes.update((recipes) => {
            recipes.push(recipe);
            return recipes;
        });
    }
};
