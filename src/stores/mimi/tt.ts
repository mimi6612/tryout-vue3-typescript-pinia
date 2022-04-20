import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useTtStore = defineStore("mimi/tt", {
  // other options...
  state: () => {
    return {
      name: "tt",
      counter: 0,
    };
  },
  getters: {
    greeting: (state) => "Hello, " + state.name,
  },
  actions: {
    increment() {
      this.counter += 1;
    },
  },
});
