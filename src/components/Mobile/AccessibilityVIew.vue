<template>
  <div class="mt-[2rem] space-y-5">
    <div class="account mx-[.75rem]">
      <router-link to="#" class="flex space-x-3 items-center">
        <div class="icon">
          <EyeIcon class="w-8 h-8 text-gray-600" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Accessibility</h2>
            <p class="text-[11px]">
              Manage aspects of your Twitter experience such as limiting colour
              contrast and motion.These settings affect all the Twitter accounts
              open in this browser.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[.75rem]">
      <router-link to="/Displaysettings" class="flex space-x-3 items-center">
        <div class="icon">
          <PencilIcon class="w-8 h-8 text-gray-600" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Display</h2>
            <p class="text-[11px]">
             Manage font size, colour and background.
            </p>
          </div>
        </div>
      </router-link>
    </div> <div class="account mx-[.75rem]">
      <router-link to="#" class="flex space-x-3 items-center">
        <div class="icon">
          <GlobeAltIcon class="w-8 h-8 text-gray-600" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Languages</h2>
            <p class="text-[11px]">
             Manage which languages are used to personalise your Twitter experience.
            </p>
          </div>
        </div>
      </router-link>
    </div> 
     <div class="account mx-[.75rem]">
      <router-link to="#" class="flex space-x-3 items-center">
        <div class="icon">
          <ChartBarIcon class="w-8 h-8 text-gray-600" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Data usage</h2>
            <p class="text-[11px]">
             Limit how twitter uses some of your network data. These settings affect all the Twitter account open in this browser.
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  EyeIcon,
  PencilIcon,
  GlobeAltIcon,
  ChartBarIcon
} from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    EyeIcon,
    PencilIcon,
    GlobeAltIcon,
    ChartBarIcon
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
