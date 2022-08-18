<template>
  <div class="lg:hidden flex flex-col min-h-screen">
    <header class="border-b-2 p-2 pb-3">
      <SearchView />
    </header>
    <main id="mobile" class="overflow-y-scroll flex-1"></main>
    <footer class="border-t-2">
      <footerMobile />
    </footer>
  </div> <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4">
      <footerMobile/>
      <NavVIew /></div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[55%] p-4">i am a message</div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[30%] p-4">
        <ExploreView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import footerMobile from "@/components/Mobile/footerMobile.vue";
import SearchView from "@/components/Mobile/SearchView.vue";
import ExploreView from "@/components/Desktop/ExploreView.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue";

export default defineComponent({
  props:['trends','handleToBottom'],

  components: {
    footerMobile,
    SearchView,
    ExploreView,
    NavVIew
  },
});
</script>
