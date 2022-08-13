<template>
  <div class="grid grid-row-5 place-items-center gap-y-[1.3rem]">
    <router-link
      v-for="route in routes"
      :key="route"
      :to="route.path"
      :class="`p-[4px_0px] flex items-center gap-x-[2rem] w-[100%] font-bold capitalize ${
        route.name === $route.name ? 'text-blue-700' : 'text-black'
      }`"
    >
      <component :is="route.content" class="w-6 h-6 font-bold text-black" />
      <component :is="route.desktop" class="w-6 h-6 font-bold text-black" />
      <div class="">{{ route.name }}</div>
    </router-link>

    <router-link to="#" class="w-full text-center">
      <div
        class="py-3 px-6 rounded-[50px] font-semibold text-white bg-blue-500"
      >
        <p>Tweet</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  GlobeIcon,
  MailIcon,
  BookmarkIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/vue/outline";
export default defineComponent({
  components: {
    HomeIcon,
    SearchIcon,
    BellIcon,
    GlobeIcon,
    MailIcon,
    BookmarkIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
  },
  setup() {
    const routes = ref<unknown>([]);
    const router = ref<unknown>([]);
    const routers = useRouter();
    onBeforeMount(() => {
      console.log(routers);
      // routes.value = routers.options.routes.filter((r) => r.mainMenu);
      // routes.value = routers.options.routes.filter((r) => r.decks);
      // router.value = routers.options.routes.filter((r) => r.content);
      // router.value = routers.options.routes.filter((r) => r.desktop);
    });

    return { routes, router };
  },
});
</script>

<style scoped></style>
