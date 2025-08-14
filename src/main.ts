import {createSSRApp} from "vue";
import App from "./App.vue";
import pinia from "./store";
import uviewPlus, {setConfig} from "uview-plus";
import "virtual:uno.css";

export function createApp() {
    const app = createSSRApp(App);

    app.use(pinia);
    app.use(uviewPlus);

    return {
        app,
    };
}

/** uview-plus 配置 */
setConfig({
    config: {
        unit: "rpx",
    },
    /** 组件默认 props */
    // props: {
    //     radio: {},
    // },
});
