<template>
  <div class="home">
    {{ msg }}
    {{ greeting }}
    ----
    {{ compositionMsg }}
    {{ compositionGreeting }}
    ----

    {{ count }}
    {{ doubled }}
    <div @click="increment">+++</div>
    <div @click="decrement">---</div>
    {{ mimi }}
    <div @click="mimiPlus">mimi wo plus</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  setup() {
    const mimi = ref(0);
    const compositionMsg = ref("mimi");
    const compositionGreeting = computed(() => "Hello" + compositionMsg.value);

    const store = useStore(key);
    const count = computed(() => store.state.count);
    const doubled = computed(() => store.getters.doubled);
    const increment = () => {
      store.dispatch("increment");
    };
    const decrement = () => {
      store.dispatch("decrement");
    };
    return {
      mimi,
      compositionMsg,
      compositionGreeting,
      count,
      doubled,
      increment,
      decrement,
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
