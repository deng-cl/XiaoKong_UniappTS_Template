import {createSSRApp} from "vue";
import App from "./App.vue";
import pinia from "./store";
import "@/static/styles/index.scss";

export function createApp() {
    const app = createSSRApp(App);

    app.use(pinia);

    return {
        app,
    };
}
