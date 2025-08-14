import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig(async () => {
    const UnoCSS = await import("unocss/vite").then((i) => i.default);

    return {
        plugins: [uni(), UnoCSS()],

        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    silenceDeprecations: ["legacy-js-api", "color-functions", "import"],
                },
            },
        },
    };
});
