import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// ストアのステートに対して型を定義します
export interface State {
  count: number;
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    setCount(state, payload: number) {
      state.count = payload;
    },
  },
  actions: {
    increment(context) {
      context.commit("setCount", context.state.count + 1);
    },
    decrement(context) {
      context.commit("setCount", context.state.count - 1);
    },
  },
});
