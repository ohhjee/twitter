<template>
  <div class="flex items-center w-full">
    <div
      class="border-2 rounded-full h-6 w-6 p-4 cursor-pointer"
      @click="sidebar"
    ></div>
    <div class="mx-2 w-full">
      <input
        type="text"
        class="border-2 rounded-full w-full focus:outline-none p-2"
        :search="search"
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

  <!-- <div class="" v-for="showresult in searchResult" :key="showresult"> -->
  <!-- <li class="border-b-2 text-black">
     <div v-html="showresult.text"></div>
     <img :src="showresult.user.profile_pic_url" alt="" srcset="">
    </li> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CogIcon } from "@heroicons/vue/outline";
import SidebarView from "./SidebarView.vue";
import axios from "axios";
import env from "@/env.js";

export default defineComponent({
  props: ["SearchTweet","search"],
  // props: {
  //   search: String,
  //   ["SearchTweet"]<anyzzzz
  // },
  components: { CogIcon, SidebarView },
  setup() {
    const showModal = ref<boolean>(false);
    // const search = ref<string>("");
    // const searchResult = ref<[]>([]);

    // async function SearchTweet(e: any) {
    //   const config = {
    //     headers: {
    //       "X-RapidAPI-Key": `${env.API_KEY}`,
    //       "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    //     },
    //   };
    //   if (e.key === "Enter") {
    //     try {
    //       await axios
    //         .get(`${env.BASE_URL}search/search?query=${search.value}`, config)
    //         .then((res) => res.data.results)
    //         .then(setResults);
    //         // .then((res) => console.log(res.data.results));
    //     } catch (error: any) {
    //       console.log(error.response.data.message);
    //     }
    //   }
    // }

    // function setResults(result: []) {
    //   searchResult.value = result;
    // }
    // console.log(SearchTweet);

    return { showModal /*SearchTweet, search, searchResult*/ };
  },
  methods: {
    sidebar() {
      this.showModal = !this.showModal;
    },
  },
});
</script>

<style scoped></style>
