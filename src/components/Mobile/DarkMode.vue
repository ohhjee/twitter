<template>
  <div
    id="idk"
    class="space-y-4 m-3"
   :class="[!lightMode ? 'bg-black text-white' : '']"
  >
    <div class="flex justify-between items-center" @click="white">
      <label for="off">Off</label>
      <input
        type="radio"
        name=""
        :checked="false"
        class="w-5 h-5"
        value="off"
        v-model="verify"
        id="off"
      />
    </div>
    <div
      class="flex justify-between items-center"
      @click="Dark"
    >
      <label for="on">On</label>
      <input
        type="radio"
        name=""
        :checked="false"
        class="w-5 h-5"
        value="on"
        v-model="verify"
        id="on"
      />
    </div>
    <div class="flex justify-between items-center">
      <label for="device">Use device settings</label>
      <input
        type="radio"
        name=""
        class="w-5 h-5"
        v-model="verify"
        value="Use device settings"
        id="device"
        :checked="false"
      />
    </div>
  </div>
  <div class="border-t-2 border-black"></div>
  <div id="idk" class="space-y-4 m-3">
    <div class="flex justify-between items-center">
      <div class="text-[1rem] font-bold">Dark theme</div>
    </div>
    <div class="flex justify-between items-center">
      <label for="Dim">Dim</label>
      <input type="radio" name="" id="Dim" />
    </div>
    <div class="flex justify-between items-center">
      <label for="light">Light out</label>
      <input type="radio" name="" id="light" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const verify = ref<null>(null);
    const lightMode = ref<any>();

    watch(lightMode, (newval) => {
      localStorage.setItem("lightMode", newval);
    });

    onMounted(() => {
      lightMode.value = localStorage.getItem("lightMode") || "";
    });

    

    return { verify, lightMode };
  },
  methods: {
    white() {
      this.lightMode = true;
    },
    Dark() {
      this.lightMode = false;
    },
  },
});
</script>

<style scoped></style>
