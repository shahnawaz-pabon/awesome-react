import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../types";

// Define action creators for incrementing and decrementing the counter
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });
export const decrementCounter = () => ({ type: DECREMENT_COUNTER });
