<template>
  <div class="grid grid-cols-5 place-items-center">
    <!-- <router-link
      v-for="route in routes"
      :key="route"
      :to="route.path"
      :class="`p-4 ${
        route.name === $route.name ? 'text-blue-700' : 'text-gray-400'
      }`"
    >
<<<<<<< HEAD
      <component :is="route.content" class="w-6 h-6 text-black font-bold" />
    </router-link> -->
    <!-- <router-link></router-link> -->
  </div> 
=======
      <component :is="route.content" class="w-6 h-6 font-bold text-black" />
    </router-link>
  </div>
>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
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
<<<<<<< HEAD
  // components: { HomeIcon, SearchIcon, BellIcon, GlobeIcon, MailIcon,BookmarkIcon },
=======
  components: {
    HomeIcon,
    SearchIcon,
    BellIcon,
    GlobeIcon,
    MailIcon,
    BookmarkIcon,
  },
>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
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
