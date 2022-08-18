<template>
  <div
    id="hey"
    v-if="loader === null"
    class="flex items-center justify-center overflow-hidden wow min-h-screen bg-blue-500"
  >
    <fonts :icon="['fab', 'twitter']" class="w-12 h-12 text-white" />
  </div>
  <div v-else id="show">
    <div class="min-h-screen">
      <router-view
        :trends="trends"
        :handleToBottom="handleToBottom"
        :error="error"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getTheme, setTheme } from "@/util/themeProvider";
import axios from "axios";

import $ from "jquery";

export default defineComponent({
  setup() {
    const trends = ref<[]>([]);
    const loader = ref(null);
    const error = ref<boolean>(true);

    const trend = async () => {
      const config = {
        headers: {
          "X-RapidAPI-Key": process.env.VUE_APP_API_KEY,
          "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
        },
      };
      try {
        const res = (await axios(
          `${process.env.VUE_APP_BASE_URL}UserTweets/?id=44196397`,
          config
        )) as any;
        trends.value = res.data;
      } catch (err: any) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    const handleToBottom = (isVisible) => {
      // trends.value = trend.data;
      if (!isVisible) {
        return;
      }
      setInterval(() => {
        trend();
      }, 5000);
    };
    onMounted(() => {
      trend().then((data) => (loader.value = data));
    });

    return { loader, handleToBottom, trends, error };
  },
});
</script>
