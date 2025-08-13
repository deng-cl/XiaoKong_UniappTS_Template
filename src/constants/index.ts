import {API_BASE_URLS, CHANNEL_LIST} from "./enum";

/** 项目名称 */
export const APP_NAME = "txw";

/** 项目版本 */
export const APP_VERSION = "1.0.0";

/** HStorage 本地存储命名空间（存储 key 前缀） */
export const STORAGE_NAMESPACE = "txw-";

/** 当前渠道 */
export const CURRENT_CHANNEL = CHANNEL_LIST["H5"];

/** 当前环境 */
export const CURRENT_ENV: DevelopmentEnvs = "dev";

/** 需要加密传输的环境 */
export const NEED_ENCRYPT: DevelopmentEnvs[] = ["pre", "prd"];

/** 请求基础路径 */
export const BASE_URL = API_BASE_URLS[CURRENT_ENV];

/** 请求超时 */
export const TIMEOUT = 10000;
