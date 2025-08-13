/** 渠道列表 */
export const CHANNEL_LIST = {
    H5: "h5",
    APK: "apk",
    IOS: "ios",
    WX_MINI: "wx mini-program",
};

/** 请求基础路径列表 */
export const API_BASE_URLS: Record<DevelopmentEnvs, string> = {
    dev: "http://localhost:3000",
    test: "",
    pre: "",
    prd: "",
};
