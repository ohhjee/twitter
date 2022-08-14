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
<<<<<<< HEAD
    // content: "HomeIcon",
=======

    // content: "HomeIcon" as const,
>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
    // mainMenu: true,
    // decks: true,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
<<<<<<< HEAD
=======

>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
    // content: "SearchIcon",
    // mainMenu: true,
    // decks: false,
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
<<<<<<< HEAD
=======

>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
    // content: "GlobeIcon",
    // mainMenu: true,
    // decks: true,
  },
  {
    path: "/notification",
    name: "Notification",
    component: NotificationView,
<<<<<<< HEAD
=======

>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
    // content: "BellIcon",
    // decks: true,
    // mainMenu: true,
  },
  {
    path: "/message",
    name: "Message",
    component: MessageView,
<<<<<<< HEAD
=======

>>>>>>> 01e6844e970d04a1f419b2fcf7230b16d2b84f1f
    // content: "MailIcon",
    // mainMenu: true,
    // decks: true,
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
    // desktop: "BookmarkIcon",
    // decks: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    // desktop: "UserIcon",
    // decks: true,
  },
  {
    path: "/more",
    name: "More",
    component: MoreView,
    // desktop: "DotsCircleHorizontalIcon",
    // decks: true,
  },
  {
    path: "/tweet",
    name: "Tweet",
    component: TweetView,
    // desktop: "DotsCircleHorizontalIcon",
    // decks: false,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
