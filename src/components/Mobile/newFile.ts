import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
setup() {
const verify = ref<null>(null);
const lightMode = ref<any>();

watch(lightMode, (newval) => {
localStorage.setItem("lightMode", newval);
});

onMounted(() => {
lightMode.value = localStorage.getItem("lightMode") || "";
});



return { verify, lightMode };
},
methods: {
white() {
this.lightMode = true;
},
Dark() {
this.lightMode = false;
},
},
});
