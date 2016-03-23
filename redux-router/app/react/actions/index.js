import * as types from '../constants';

export function increment() {
  return { type: types.INCREMENT_COUNTER };
}

export function decrement() {
  return { type: types.DECREMENT_COUNTER };
}
