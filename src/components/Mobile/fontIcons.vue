<template>
  <div class="space-y-4">
    <router-link to="#" class="flex items-center">
      <UserIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Profile</span>
    </router-link>
    <router-link to="#" class="flex items-center">
      <ClipboardListIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Lists</span>
    </router-link>
    <router-link to="#" class="flex items-center">
      <AnnotationIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Topics</span>
    </router-link>
    <router-link to="#" class="flex items-center">
      <BookmarkIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Bookmarks</span>
    </router-link>
    <router-link to="#" class="flex items-center">
      <LightningBoltIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Moments</span>
    </router-link>
    <router-link to="#" class="flex items-center">
      <CashIcon class="w-6 h-6 mr-4" />
      <span class="text-[1.2rem]">Monetisation</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  UserIcon,
  ClipboardListIcon,
  AnnotationIcon,
  BookmarkIcon,
  LightningBoltIcon,
  CashIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    UserIcon,
    ClipboardListIcon,
    AnnotationIcon,
    BookmarkIcon,
    LightningBoltIcon,
    CashIcon,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
