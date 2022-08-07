/* eslint-disable */
// import vueHeroicons,{Route} from "vue-heroicons"
declare module 'vue-heroicon' {
    import type { DefineComponent } from 'vue'
    const content: DefineComponent<string>
    export default content
  }
  