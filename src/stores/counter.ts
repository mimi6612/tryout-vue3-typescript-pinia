import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useCounterStore = defineStore("counter", {
  // other options...
  state: () => {
    return {
      counter: 0,
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    },
  },
});
