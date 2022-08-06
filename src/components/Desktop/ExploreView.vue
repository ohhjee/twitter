<template>
  <div class="mt-2 bg-black w-full rounded-[10px] p-3">
    <div class="font-[18px] font-extrabold text-white">Who to follow</div>
    <div class="my-3">
      <router-link to="#" class="space-x-2 w-full text-white ">
        <div class="flex justify-between mb-7">
          <div class="flex space-x-2">
            <div
              class="rounded-full h-10 w-10 border-2 bg-white border-white"
            ></div>
            <div class="text">
              <div class="text-white flex items-center justify-between">
                <div class="user_name flex items-center ">
                  <div class="text-[.8rem]">OKX</div> 
                  <BadgeCheckIcon class="w-4 h-4 ml-1 text-white" />
                </div>
              </div>
              <div class="follow-btn"></div>
              <div class="text-[10px]">@okx</div>
              <div class="flex mt-3 items-center space-x-1">
                <div class="p-[1.2px] rounded-[2px] bg-gray-600">
                  <ArrowNarrowUpIcon class="text-black rotate-45 w-3 h-3" />
                </div>
                <div class="text-gray-600 font-bold text-xs">Promoted</div>
              </div>
            </div>
          </div>
          <div class="bg-white h-8 flex items-center rounded-2xl py-2 px-4">
            <router-link to="#" class="text-black font-bold"
              >follow</router-link
            >
          </div>
        </div>
      </router-link>
      <router-link to="#" class="space-x-2 w-full text-white ">
        <div class="flex justify-between mb-7">
          <div class="flex space-x-2">
            <div
              class="rounded-full h-10 w-10 border-2 bg-white border-white"
            ></div>
            <div class="text">
              <div class="text-white flex items-center justify-between">
                <div class="user_name flex items-center ">
                  <div class="text-[.8rem]">OKX</div> 
                  <BadgeCheckIcon class="w-4 h-4 ml-1 text-white" />
                </div>
              </div>
              <div class="follow-btn"></div>
              <div class="text-[10px]">@okx</div>
              <div class="flex mt-3 items-center space-x-1">
                <div class="p-[1.2px] rounded-[2px] bg-gray-600">
                  <ArrowNarrowUpIcon class="text-black rotate-45 w-3 h-3" />
                </div>
                <div class="text-gray-600 font-bold text-xs">Promoted</div>
              </div>
            </div>
          </div>
          <div class="bg-white h-8 flex items-center rounded-2xl py-2 px-4">
            <router-link to="" class="text-black font-bold"
              >follow</router-link
            >
          </div>
        </div>
      </router-link>
      <router-link to="#" class="space-x-2 w-full text-white ">
        <div class="flex justify-between mb-7">
          <div class="flex space-x-2">
            <div
              class="rounded-full h-10 w-10 border-2 bg-white border-white"
            ></div>
            <div class="text">
              <div class="text-white flex items-center justify-between">
                <div class="user_name flex items-center ">
                  <div class="text-[.8rem]">OKX</div> 
                  <BadgeCheckIcon class="w-4 h-4 ml-1 text-white" />
                </div>
              </div>
              <div class="follow-btn"></div>
              <div class="text-[10px]">@okx</div>
              <div class="flex mt-3 items-center space-x-1">
                <div class="p-[1.2px] rounded-[2px] bg-gray-600">
                  <ArrowNarrowUpIcon class="text-black rotate-45 w-3 h-3" />
                </div>
                <div class="text-gray-600 font-bold text-xs">Promoted</div>
              </div>
            </div>
          </div>
          <div class="bg-white h-8 flex items-center rounded-2xl py-2 px-4">
            <router-link to="#" class="text-black font-bold"
              >follow</router-link
            >
          </div>
        </div>
      </router-link>
    </div>

    <div class="seemore">
    <router-link to="#" class="text-blue-700 font-semibold text-[15px]">
    Show  more
    </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BadgeCheckIcon, ArrowNarrowUpIcon } from "@heroicons/vue/solid";
export default defineComponent({
  components: { BadgeCheckIcon, ArrowNarrowUpIcon },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
