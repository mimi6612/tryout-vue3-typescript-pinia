<template>
  <div class="home">
    {{ msg }}
    {{ greeting }}
    ----
    {{ compositionMsg }}
    {{ compositionGreeting }}
    ---- dddd
    {{ counter }}
    {{ doubleCount }}
    <div @click="increment">+++</div>
    <div @click="decrement">---</div>
    {{ mimi }}
    <div @click="mimiPlus">mimi wo plus</div>
    {{ counterStore.counter }}
    {{ counterStore.doubleCount }}
    <div @click="counterStore.increment">+++</div>
    <div @click="counterStore.decrement">---</div>
    {{ ttStore.name }}
    {{ ttStore.greeting }}
    {{ ttStore.counter }}
    <div @click="ttStore.increment">+++</div>
    <div @click="ttStore.decrement">---</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "vuex";
import { key } from "@/store";
import { useCounterStore } from "@/stores/counter";
import { useTtStore } from "@/stores/mimi/tt";

export default defineComponent({
  name: "Home",
  setup() {
    const mimi = ref(0);
    const compositionMsg = ref("mimi");
    const compositionGreeting = computed(() => "Hello" + compositionMsg.value);

    const store = useStore(key);
    const count = computed(() => store.state.count);
    const doubleCount = computed(() => store.getters.doubleCount);
    const increment = () => {
      store.dispatch("increment");
    };
    const decrement = () => {
      store.dispatch("decrement");
    };
    const counterStore = useCounterStore();

    const ttStore = useTtStore();
    return {
      mimi,
      compositionMsg,
      compositionGreeting,
      count,
      doubleCount,
      increment,
      decrement,
      counterStore,
      ttStore,
    };
  },
  data() {
    return {
      msg: "message",
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    greeting(): string {
      return "Hello " + this.msg;
    },
  },
  methods: {
    mimiPlus() {
      this.mimi += 1;
    },
  },
});
</script>
