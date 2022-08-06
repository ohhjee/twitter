<template>
  <div class="lg:container">
    <div id="media">
      <div class="m-3">
        <div class="text-[1.2rem] font-bold mb-4">Media</div>
        <div class="flex justify-between">
          <label for="media">
            <div class="text-1xl">Media previews</div>
          </label>

          <div>
            <input type="radio" name="" id="media" />
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>
    <div id="Display">
      <div class="m-3">
        <div class="text-[1.2rem] font-bold mb-4">Display</div>
        <div class="dark_mode mb-3">
          <router-link to="/Darkmode">
            <div class="text-[.9rem] font-bold">Dark mode</div>
            <p class="text-xs">on</p>
          </router-link>
        </div>
        <div class="flex justify-between items-center space-x-5">
          <div class="nones">
            <label for="emoji">
              <div class="text-1xl font-bold">Emoji</div>
              <p class="text-xs">
                Use the Twitter emoji set instead of your device's default set
              </p>
            </label>
          </div>
          <div>
            <input type="radio" name="" id="emoji" />
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>

    <div id="sound">
      <div class="m-3">
        <div class="text-[1.2rem] font-bold mb-4">Sound</div>
        <div class="flex justify-between">
          <div>
            <label for="sound">
              <div class="text-1xl">Sound effects</div>
            </label>
          </div>
          <div>
            <input type="radio" name="" id="sound" />
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>
    <div id="sound">
      <div class="m-3">
        <div class="text-[1.2rem] font-bold mb-4">Web browser</div>
        <div class="flex justify-between">
          <div class="texts">
            <label for="web">
              <div class="text-1xl">Use in-app browser</div>
              <p class="text-xs">Open external links with Twitter browser</p>
            </label>
          </div>
          <div>
            <input type="radio" name="" id="web" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
