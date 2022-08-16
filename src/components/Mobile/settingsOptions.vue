<template>
  <div class="mt-3 space-y-3">
    <div class="account mx-[2px]">
      <router-link to="#" class="space-x-3 flex items-center">
        <div class="icon">
          <UserIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Your account</h2>
            <p class="m-0  text-[11px]">
              see information about your account, download an archive of your
              data or learn about your account deactivation options.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px]">
      <router-link to="#" class="space-x-3 flex items-center">
        <div class="icon">
          <LockClosedIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Security and account access</h2>
            <p class="m-0  text-[11px]">
             Manage your account's security and keep track of your account's usage including apps that you have connected to your account.  
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px]">
      <router-link to="#" class="space-x-3 flex items-center">
        <div class="icon">
          <CashIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Monetisation</h2>
            <p class="m-0  text-[11px]">
          See how you can make money on twitter and manage your monetisation options.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px]">
      <router-link to="#" class="space-x-3 flex items-center">
        <div class="icon">
          <ShieldCheckIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Privacy and safety</h2>
            <p class="m-0  text-[11px]">
              Manage what information you see and share on Twitter.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px]">
      <router-link to="#" class="space-x-3 flex items-center">
        <div class="icon">
          <BellIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Notifications</h2>
            <p class="m-0  text-[11px]">
             Select the kinds of notification you get about your activities, interest and recommendations.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px] ">
      <router-link :to="{name: 'DisplayLan'}" where_to_chanage_color class="space-x-3 flex items-center">
        <div class="icon">
          <UserCircleIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Accessibility, display and language</h2>
            <p class="m-0  text-[11px]">
           Manage how twitter content is display to you.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px] flex items-center">
      <router-link to="#" class="flex space-x-3 items-center">
        <div class="icon">
          <DotsCircleHorizontalIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Additional resources</h2>
            <p class="m-0  text-[11px]">
              check out other places for helpful information to learn more about
              Twitter products and services.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="account mx-[2px]">
      <router-link to="#" class="flex space-x-3 items-center">
        <div class="icon">
          <EyeIcon class="w-8 h-8 text-gray-400" />
        </div>
        <div class="text">
          <div class="text-details">
            <h2 class="font-bold">Proxy</h2>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  UserIcon,
  LockClosedIcon,
  CashIcon,
  ShieldCheckIcon,
  BellIcon,
  UserCircleIcon,
  DotsCircleHorizontalIcon,
  EyeIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    UserIcon,
    LockClosedIcon,
    CashIcon,
    ShieldCheckIcon,
    BellIcon,
    UserCircleIcon,
    DotsCircleHorizontalIcon,
    EyeIcon,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
