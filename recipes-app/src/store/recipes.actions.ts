import { createAction,  props } from "@ngrx/store";


export const removeRecipe = createAction('[Recipe Componet] RemoveRecipe', props<{ id: string}>())
// export const increment = createAction('[Counter Componet] Increment')
// export const decrement = createAction('[Counter Componet] Decrement')
// export const reset = createAction('[Counter Componet] Reset')