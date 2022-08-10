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
    <div class="flex justify-between items-center" @click="Dark">
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
  <div
    :class="[
      lightMode ? 'border-t-[1px] border-white' : 'border-t-[1px] border-black',
    ]"
  ></div>
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
  props: ["lightMode"],
  emits: ["white", "dark"],

  setup(_, { emit }) {
    const verify = ref<any>();
    // const lightMode = ref<any>(localStorage.getItem("lightMode") == "true");
    return { verify };
  },
  methods: {
    white() {
      this.$emit("white");
    },
    Dark() {
      this.$emit("dark");
    },
  },
});
</script>

<style scoped></style>
