import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "@/views/SearchView.vue";
import ExploreView from "@/views/ExploreView.vue";
import NotificationView from "@/views/NotificationView.vue";
import MessageView from "@/views/MessageView.vue";
import SettingView from "@/views/SettingsView.vue";
import DisplayLan from "@/views/DisplayLan.vue";
import DisplaySound from "@/views/DisplayView.vue";
import Darkmode from "@/views/DarkSettings.vue";
import BookMarkView from "@/views/BookMarkView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MoreView from "@/views/MoreView.vue";
import TweetView from "@/views/TweetView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    content: "HomeIcon",
    mainMenu: true,
    decks: true,
  },
  {
    path: "/Search",
    name: "search",
    component: SearchView,
    content: "SearchIcon",
    mainMenu: true,
    decks: false,
  },
  {
    path: "/Explore",
    name: "Explore",
    component: ExploreView,
    content: "GlobeIcon",
    mainMenu: true,
    decks: true,
  },
  {
    path: "/Notification",
    name: "Notification",
    component: NotificationView,
    content: "BellIcon",
    decks: true,
    mainMenu: true,
  },
  {
    path: "/Message",
    name: "Message",
    component: MessageView,
    content: "MailIcon",
    mainMenu: true,
    decks: true,
  },
  {
    path: "/Setting",
    name: "Setting",
    component: SettingView,
  },
  {
    path: "/Display",
    name: "Display",
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
    desktop: "BookmarkIcon",
    decks: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    desktop: "UserIcon",
    decks: true,
  },
  {
    path: "/more",
    name: "More",
    component: MoreView,
    desktop: "DotsCircleHorizontalIcon",
    decks: true,
  },
  {
    path: "/tweet",
    name: "Tweet",
    component: TweetView,
    desktop: "DotsCircleHorizontalIcon",
    decks: false,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
