import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../../types/counterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
