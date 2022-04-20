

# Vuex4, piniaの主な違い
- Vuex4のmutations, actionsは、piniaではまとめて、actionsになっている。storeへの参照もthisからできる。
- Vuex4は型付けがstoreだけでしか行われない。piniaはstate, getters, actions全て型付けが行われる。
- Vuex4ではTypeScriptでの型付けのためにInjectionKeyの指定やStateの型定義が別途必要
- 呼び出し方も違う

vuexのTypeScript対応store
```
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
```

piniaのTypeScript対応store
```
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
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
```

vuexのcomposition APIでのstoreの利用
```
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore(key);
    const count = computed(() => store.state.count);
    const doubleCount = computed(() => store.getters.doubleCount);
    const increment = () => {
      store.dispatch("increment");
    };
    const decrement = () => {
      store.dispatch("decrement");
    };
    return {
      count,
      doubleCount,
      increment,
      decrement,
    };
  },
});
```

piniaのcomposition APIでのstoreの利用
```
import { computed, defineComponent } from "vue";
import { storeToRefs } from 'pinia'
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    const count = computed(() => counterStore.count);
    const doubleCount = computed(() => counterStore.doubleCount);
    const increment = counterStore.increment
    const decrement = counterStore.decrement

    const { count, doubleCount, increment, decrement } = storeToRefs(store)

    return {
      count,
      doubleCount,
      increment,
      decrement,
    };
  },
});
```



