import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "@/views/SearchView.vue";
import ExploreView from "@/views/ExploreView.vue";
import NotificationView from "@/views/NotificationView.vue";
import MessageView from "@/views/MessageView.vue";
import SettingView from "@/views/SettingsView.vue";
import DisplayLan from "@/views/Setting/DisplayLan.vue";
import DisplaySound from "@/views/Setting/DisplayView.vue";
import Darkmode from "@/views/Setting/DarkSettings.vue";
import BookMarkView from "@/views/BookMarkView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MoreView from "@/views/MoreView.vue";
import TweetView from "@/views/TweetView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,

  },
  {
    path: "/search",
    name: "search",
    component: SearchView,

  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,

  },
  {
    path: "/notification",
    name: "Notification",
    component: NotificationView,

  },
  {
    path: "/message",
    name: "Message",
    component: MessageView,

  },
  {
    path: "/setting",
    name: "Setting",
    component: SettingView,
  },
  {
    path: "/display",
    name: "DisplayLan",
    component: DisplayLan,
  },
  {
    path: "/Displaysettings",
    name: "DisplaySettings",
    component: DisplaySound,
  },
  {
    path: "/Darkmode",
    name: "Darkmode",
    component: Darkmode,
  },

  {
    path: "/bookmark",
    name: "Bookmark",
    component: BookMarkView,
   
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
   
  },
  {
    path: "/more",
    name: "More",
    component: MoreView,
   
  },
  {
    path: "/tweet",
    name: "Tweet",
    component: TweetView,
   
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
