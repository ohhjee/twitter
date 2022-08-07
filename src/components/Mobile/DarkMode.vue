<template>
  <div id="idk" class="space-y-4 m-3">
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
      :isDark="isDark"
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
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const verify = ref<null>(null);
    const isDark = ref<any>();

    watch(isDark, (newval) => {
      localStorage.setItem("isDark", newval);
    });
    return { verify, isDark };
  },
  methods: {
    Dark() {
      this.isDark = true;
      //   console.log("ON");
      console.log(this.isDark);
    },
    white() {
      this.isDark = false;
      console.log(this.isDark);
    },
  },
});
</script>

<style scoped></style>
