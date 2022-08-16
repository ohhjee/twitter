<template>
  <div class="container mx-auto">
    <div class="flex py-2 items-center mx-2 space-x-3">
      <div class="back">
        <router-link to="/">
          <ArrowLeftIcon class="w-6 h-6 font-bold" />
        </router-link>
      </div>
      <div>
        <div class="text-2xl font-bold">Settings</div>
        <div class="anchor">@OLUWA__GBENGA</div>
      </div>
    </div>
    <div class="border-t-[1px]"></div>
    <SettingsOptions>
    <router-view></router-view>

    </SettingsOptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import SettingsOptions from "@/components/Mobile/settingsOptions.vue";

export default defineComponent({
  name:"SettingView",
  components: { ArrowLeftIcon, SettingsOptions },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
