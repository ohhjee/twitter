<template>
  <div class="flex flex-col lg:hidden">
    <header class="border-b-2">
      <HeaderView />
    </header>
    <main id="mobile" class="flex-1 overflow-y-scroll">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, libero
      molestias iure quis corrupti eius assumenda cupiditate maiores voluptate
      quas officiis, sit dolore quisquam explicabo at. Nesciunt maxime
      asperiores dolor. Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Neque voluptatem temporibus ipsam at nam natus soluta sapiente
      consequatur hic, maiores, facilis aperiam dolorum deleniti repudiandae
      recusandae in! Maxime, ea ab! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nesciunt, voluptates omnis! Vel error vero ipsa,
      consectetur dolor laudantium facilis officia corrupti? Corporis,
      consectetur consequatur ab amet, provident eaque recusandae distinctio
      iste soluta totam expedita dolor assumenda perspiciatis cum possimus vero,
      magni facilis iure eius. Vel, recusandae debitis adipisci, aliquam velit
      sed a nostrum fugiat expedita error nulla facere ab nemo repellat quos
      quisquam? Dolore sapiente deleniti assumenda officia quidem libero, qui
      voluptatum neque est necessitatibus ab, dolorem, accusantium voluptatem
      nemo? Enim perspiciatis accusamus rerum eius accusantium veniam voluptate
      unde quae velit amet magnam, distinctio repellat nisi laborum ad deserunt
      sunt quis voluptates quia id nobis dolorem reprehenderit similique
      incidunt. Atque voluptatem recusandae ad odit alias voluptatibus fuga,
      perferendis harum nam saepe reiciendis quisquam inventore eius incidunt
      maiores, ut expedita modi repudiandae est eos tenetur a quae labore et.
      Iusto dolores repellat illum officia accusamus omnis enim temporibus
      cumque consequuntur eaque corrupti maiores cum, quas odio praesentium
      magnam sint earum est. Porro rem error eveniet in tempore consequuntur
      dolor corporis. Doloribus quasi consectetur quidem numquam quisquam id
      velit, nam error est alias hic, voluptatum sunt quod voluptatibus
      molestias sed facilis ut doloremque! Rem recusandae, esse nostrum laborum
      necessitatibus, inventore dolores repellat similique dolorum explicabo
      omnis. Illum repellendus earum fuga accusantium minima, obcaecati
      reprehenderit sit, facilis tempore quidem omnis ipsam molestiae? Inventore
      quis dolore fuga. Soluta iste, tempora animi voluptas nam vero recusandae
      totam ipsum amet commodi aspernatur, impedit porro omnis quaerat officiis
      quod nulla tenetur. Deleniti, voluptate, quas perferendis quia reiciendis
      iure itaque voluptatum omnis ipsa, quam cupiditate similique ab veritatis
      minima molestias tenetur commodi ex. Earum ex amet, incidunt quas et, non
      eligendi facere tenetur repellat eos maxime? Expedita, blanditiis
      accusantium? Culpa eos quis animi cumque aliquid illo earum. Ab enim a,
      sunt quasi quisquam exercitationem. Ex asperiores sunt inventore quibusdam
      laborum adipisci vel repellat delectus enim sapiente id, sit quidem quos
      quisquam consequuntur! Earum iure delectus exercitationem iste
      voluptatibus explicabo quaerat omnis dignissimos porro debitis neque, enim
      deleniti culpa amet a dicta, nisi magni nam asperiores hic repudiandae,
      commodi quos? Maiores distinctio nihil rem minus exercitationem aut ad nam
      quos animi. Quasi ipsum, repellat molestiae, explicabo ex, similique sed
      autem facilis alias animi aperiam fugiat maiores magni vel! Nulla, ab non
      obcaecati cumque nesciunt quae eligendi sed velit, aperiam delectus nam
      exercitationem esse culpa iure id blanditiis facilis magni fugit vitae
      deserunt quasi voluptas! Veniam distinctio autem aliquam eius
      necessitatibus amet, reprehenderit expedita dolorem, consectetur
      praesentium animi! Cupiditate necessitatibus eligendi architecto, tenetur
      eaque sunt recusandae cum sequi aliquid culpa nisi autem saepe dolorem ut
      asperiores totam harum quae animi nesciunt repudiandae dolorum vitae
      excepturi aliquam. Illo modi debitis earum blanditiis! Totam sed officiis
      temporibus, praesentium soluta sint quo voluptatem illum nesciunt tempore
      cupiditate perferendis quae laboriosam ad velit vitae, ut minima odit
      delectus. Perferendis ipsa vero quasi nostrum aliquid provident magnam
      repellendus pariatur et non, eius ipsam impedit? Dolores perferendis
      magnam laboriosam laudantium rem praesentium odit expedita nobis
      obcaecati, aspernatur dignissimos quas veritatis ab dolorum itaque ex
      commodi. Sit?
    </main>
    <footer class="border-t-2">
      <footerView />
    </footer>
  </div>
  <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4"><NavVIew /></div>
      <div class="h-screen border-r-2 border-gray-400"></div>
      <div class="w-[55%] p-4">
        <div class="flex items-center justify-between">
          <div class="page_name">Home</div>
          <SparklesIcon class="w-5 h-5" />
        </div>
        <div class="tweet">
          <div class="flex items-center my-4 space-x-1">
            <div
              class="border-2 border-red-500 rounded-full h-10 w-10 bottom-[10px] relative"
            ></div>
            <div class="block">
              <textarea
                name=""
                id=""
                cols="50"
                rows="1"
                class="resize-none p-2 focus:outline-none placeholder:font-[20px]"
                placeholder="what's happening?"
              ></textarea>
              <div class="flex items-center justify-between my-2 ml-5">
                <div class="flex space-x-3">
                  <router-link to="#">
                    <PhotographIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <EmojiHappyIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <ChartSquareBarIcon class="w-5 h-5 rotate-90" />
                  </router-link>
                  <router-link to="#">
                    <GiftIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <CalendarIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <LocationMarkerIcon class="w-5 h-5" />
                  </router-link>
                </div>
                <router-link to="#">
                  <div class="py-[2px] px-4 bg-blue-700 rounded-[50px]">
                    <p class="font-bold text-white">Tweet</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen border-r-2 border-gray-400"></div>
      <div class="w-[30%] p-4">
        <SearchView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import footerView from "@/components/Mobile/footerView.vue";
import HeaderView from "../components/Mobile/HeaderView.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue"; // @ is an alias to /src
import SearchView from "@/components/Desktop/SearchDesk.vue";
import env from "@/env.js";
import axios from "axios";
import {
  SparklesIcon,
  PhotographIcon,
  GiftIcon,
  ChartSquareBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  name: "HomeView",
  components: {
    footerView,
    HeaderView,
    NavVIew,
    SearchView,
    SparklesIcon,
    PhotographIcon,
    GiftIcon,
    ChartSquareBarIcon,
    EmojiHappyIcon,
    CalendarIcon,
    LocationMarkerIcon,
  },
  setup() {
    const trend = ref<[]>([]);
    onMounted(() => {
      const config = {
        headers: {
          "X-RapidAPI-Key": process.env.VUE_APP_API_KEY,
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };
      // try {
      //   axios
      //     .get(`${env.BASE_URL}user/tweets?username=elonmusk&?limit=40`, config)
      //     .then((res) => res.data.tweet_id);
      //   // .then((res) => console.log(res.data.results));
      // } catch (error: any) {
      //   console.log(error.response.data.message);
      // }
    });
    // const sidebar = ref<boolean>(false);

    const getTrend = async () => {
      const config = {
        headers: {
          "X-RapidAPI-Key": `${env.API_KEY}`,
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };
      try {
        const res = await axios(
          `${env.BASE_URL}user/tweets?username=omarmhaimdat&?limit=40`,
          config
        );
        trend.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };

    setInterval(() => {
      // getTrend();
    }, 1500);

    return { trend };
  },
});
</script>
