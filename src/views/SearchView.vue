<template>
  <div class="lg:hidden flex flex-col min-h-screen">
    <header class="border-b-2 p-2 pb-3">
      <div class="flex items-center w-full">
        <div
          class="border-2 rounded-full h-6 w-6 p-4 cursor-pointer"
          @click="sidebar"
        ></div>
        <div class="mx-2 w-full">
          <input
            type="text"
            class="border-2 rounded-full w-full focus:outline-none p-2"
            v-model="search"
            @keypress="SearchTweet"
          />
        </div>
        <CogIcon class="w-8 h-8" />
        <SidebarView
          :showModal="showModal"
          v-show="showModal"
          @closeNav="sidebar"
        />
      </div>
    </header>
    <main id="mobile" class="overflow-scroll flex-1">
      <router-link
        to="#"
        class="flex p-4 lg:hidden border-b-2 border-black"
        v-for="search in searchResult"
        :key="search"
      >
        <figure class="w-16 mr-3">
          <img
            :src="search.user.profile_img_url"
            alt="image"
            class="rounded-full w-full"
          />
        </figure>
      </router-link>
      <!-- {{showresult.text}} -->
    </main>
    <footer class="border-t-2">
      <footerMobile />
    </footer>
  </div>
   <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4">
      <footerMobile/>
      <NavVIew /></div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[55%] p-4">i am a programmer</div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[30%] p-4">
        <SearchView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import footerView from "@/components/Mobile/footerView.vue";
import footerMobile from "@/components/Mobile/footerMobile.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue";
import { CogIcon } from "@heroicons/vue/outline";
import SidebarView from "@/components/Mobile/SidebarView.vue";
import SearchView from "../components/Mobile/SearchView.vue";
import axios from "axios";
import env from "@/env.js";

export default defineComponent({
  props:['trends','handleToBottom'],

  name: "HomeView",
  // props: ["showresult"],
  components: {
    footerMobile,
    NavVIew,
SearchView,
    CogIcon,
    SidebarView,
  },
  setup() {
    const showModal = ref<boolean>(false);

    const search = ref<string>("");
    const searchResult = ref<[]>([]);

    async function SearchTweet(e: any) {
      const config = {
        headers: {
          "X-RapidAPI-Key": `${env.API_KEY}`,
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };
      if (e.key === "Enter") {
        try {
          await axios
            .get(`${env.BASE_URL}search/search?query=${search.value}`, config)
            .then((res) => res.data.results)
            .then(setResults);
          // .then((res) => console.log(res.data.results));
        } catch (error: any) {
          console.log(error.response.data.message);
        }
      }
    }

    function setResults(result: []) {
      searchResult.value = result;
      console.log(search.value);
    }
    // console.log(SearchTweet);

    return { showModal, SearchTweet, search, searchResult };
  },
  methods: {
    sidebar() {
      this.showModal = !this.showModal;
    },
  },
});
</script>
