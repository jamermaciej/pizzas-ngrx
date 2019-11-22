import { createSelector } from '@ngrx/store';

import * as fromRoot from './../../../app/store';
import * as fromfeature from './../reducers';
import * as fromToppings from './../reducers/toppings.reducer';
import { state } from '@angular/core';

// {
//     products: {
//         pizzas: {},
//         toppings: {
//             entities: {
//                "1": {
//                    "id": number,
//                    "name": string
//                }
//             },
//             loaded: boolean,
//             loading: boolean
//         }
//     }
// }

export const getToppingsState = createSelector(
    fromfeature.getProductsState,
    (state: fromfeature.ProductsState) => state.toppings
)

export const getToppingsEntities = createSelector(
    getToppingsState,
    fromToppings.getToppingsEntities
)

export const getAllToppings = createSelector(
    getToppingsEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)])
    }
)

export const getToppingsLoaded = createSelector(
    getToppingsState,
    fromToppings.getToppingsLoaded
)

export const getToppingsLoading = createSelector(
    getToppingsState,
    fromToppings.getToppingsLoading
)

export const getSelectedToppings = createSelector(
    getToppingsState,
    fromToppings.getSelectedToppings
)