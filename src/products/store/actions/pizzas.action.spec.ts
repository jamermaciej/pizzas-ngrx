import * as fromPizzas from './pizzas.action';

describe('Pizza Actions', () => {
    describe('LoadPizzas Actions', () => {
        describe('LoadPizzas', () => {
            it('should be create an actions', () => {
                const action = new fromPizzas.LoadPizzas();

                expect({ ...action }).toEqual({
                    type: fromPizzas.LOAD_PIZZAS
                });
            });
        });

        describe('LoadPizzasFail', () => {
            it('should be create an actions', () => {
                const payload = { message: 'Load Fail '};
                const action = new fromPizzas.LoadPizzasFail(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_FAIL,
                    payload
                });
            });
        });
    });
});