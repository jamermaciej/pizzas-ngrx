import { Injectable } from '@angular/core';

import { of } from 'rxjs/Observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { ToppingsService } from './../../services/toppings.service';

import * as toppingActions from './../actions/toppings.action';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ToppingsEffects {
    constructor(
        private actions$: Actions,
        private toppingsService: ToppingsService
    ) {}

    @Effect()
    loadToppings$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS)
        .pipe(
            switchMap( () => {
                return this.toppingsService.getToppings().pipe(
                    map(topping => new toppingActions.LoadToppingsSuccess(topping)),
                    catchError(error => of(new toppingActions.LoadToppingsFail(error)))
                )
            })
        )
}