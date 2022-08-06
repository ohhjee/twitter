<template>
  <div class="lg:hidden flex flex-col min-h-screen">
    <header class="border-b-2 p-2 pb-3">
      <NotifictionView />
    </header>
    <main id="mobile" class="overflow-y-scroll flex-1"></main>
    <footer class="border-t-2">
      <footerView />
    </footer>
  </div>
   <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4"><NavVIew /></div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[55%] p-4">i am a Notification</div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[30%] p-4">
        <ExploreView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import footerView from "@/components/Mobile/footerView.vue";
import NotifictionView from "../components/Mobile/notifictionView.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue"; // @ is an alias to /src
import ExploreView from "@/components/Desktop/ExploreView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    footerView,
    NotifictionView,
    NavVIew,
    ExploreView
},
});
</script>
