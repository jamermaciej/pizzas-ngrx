import { PizzaGuard } from './pizza.guard';
import { PizzaExistsGuard } from './pizza-exists';
import { ToppingsGuard } from './toppings.guard';

export const guards: any[] = [PizzaGuard, PizzaExistsGuard, ToppingsGuard];

export * from './pizza.guard';
export * from './pizza-exists';
export * from './toppings.guard'