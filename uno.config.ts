import {colors, presetWeapp} from "unocss-preset-weapp";
import {transformerClass} from "unocss-preset-weapp/transformer";
import {defineConfig, presetWind3, presetMini} from "unocss";

export default defineConfig({
    theme: {
        colors: {
            // primary
            primary: "var(--u-primary)",
            "primary-dark": "var(--u-primary-dark)",
            "primary-disabled": "var(--u-primary-disabled)",
            "primary-light": "var(--u-primary-light)",
            // warning
            warning: "var(--u-warning)",
            "warning-dark": "var(--u-warning-dark)",
            "warning-disabled": "var(--u-warning-disabled)",
            "warning-light": "var(--u-warning-light)",
            // success
            success: "var(--u-success)",
            "success-dark": "var(--u-success-dark)",
            "success-disabled": "var(--u-success-disabled)",
            "success-light": "var(--u-success-light)",
            // error
            error: "var(--u-error)",
            "error-dark": "var(--u-error-dark)",
            "error-disabled": "var(--u-error-disabled)",
            "error-light": "var(--u-error-light)",
            // info
            info: "var(--u-info)",
            "info-dark": "var(--u-info-dark)",
            "info-disabled": "var(--u-info-disabled)",
            "info-light": "var(--u-info-light)",
            // other
            "main-color": "var(--u-main-color)",
            "content-color": "var(--u-content-color)",
            "tips-color": "var(--u-tips-color)",
            "light-color": "var(--u-light-color)",
            "border-color": "var(--u-border-color)",
            "bg-color": "var(--u-bg-color)",
            "disabled-color": "var(--u-disabled-color)",
        },
    },

    // 预设
    presets: [
        // https://github.com/MellowCo/unocss-preset-weapp
        presetWeapp(),
        presetMini(),
        presetWind3(),
    ],

    // 规则
    rules: [
        [
            /^clamp-(\d+)$/,
            ([, d]) => ({
                display: "-webkit-box",
                "-webkit-box-orient": " vertical",
                "-webkit-line-clamp": d,
                overflow: "hidden",
            }),
        ],
    ],

    // 快捷方式
    shortcuts: [
        ["center", "flex items-center justify-center"],
        ["center-x", "flex justify-center"],
        ["center-y", "flex justify-start items-center"],
        ["between-x", "flex justify-between items-center"],
        [/^wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
    ],

    // 转换
    transformers: [
        // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
        transformerClass(),
    ],
});
