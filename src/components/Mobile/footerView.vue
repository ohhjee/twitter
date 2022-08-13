<template>
  <div class="grid grid-cols-5 place-items-center">
    <router-link
      v-for="route in routes"
      :key="route"
      :to="route.path"
      :class="`p-4 ${
        route.name === $route.name ? 'text-blue-700' : 'text-gray-400'
      }`"
    >
      <component :is="route.content" class="w-6 h-6 font-bold text-black" />
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
} from "@heroicons/vue/outline";
export default defineComponent({
  components: {
    HomeIcon,
    SearchIcon,
    BellIcon,
    GlobeIcon,
    MailIcon,
    BookmarkIcon,
  },
  setup() {
    const routes = ref<any>([]);
    const router = ref<any>([]);
    const routers = useRouter();
    onBeforeMount(() => {
      // routes.value = routers.options.routes.filter((r) => r.mainMenu);
      // router.value = routers.options.routes.filter((r) => r.content);
    });

    return { routes, router };
  },
});
</script>

<style scoped></style>
