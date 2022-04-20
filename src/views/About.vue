<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ counterStore.counter }}
    {{ counterStore.doubleCount }}
    {{ ttStore.counter }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useTtStore } from "@/stores/mimi/tt";

export default defineComponent({
  name: "About",
  setup() {
    const counterStore = useCounterStore();
    const ttStore = useTtStore();

    return {
      counterStore,
      ttStore,
    };
  },
});
</script>
