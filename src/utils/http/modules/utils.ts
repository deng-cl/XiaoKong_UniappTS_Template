import type {HRequest, HRequestConfig} from "./request-wrap";

// -- 请求方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// -- 请求 config 配置类型
export type HttpConfig = Omit<HRequestConfig, "url" | "method" | "data" | "params">;

// -- 生成的请求函数 → 通过泛型 R 来提供请求响应结果的类型声明
type FetchGenFunction<R = any> = (data?: any, config?: HttpConfig) => Promise<R>;
export type GoodGenerateFetchFunctions<T> = {
    [K in keyof T]: FetchGenFunction<T[K]>;
};

// -- 传入的参数列表类型 → 通过泛型 K 来限制传入的 key 类型
interface FetchList<K> {
    key: K;
    url: string;
    method: HttpMethod;
}
type FetchListTuple<K> = [key: K, url: string, HttpMethod];
export type FetchListInput<K> = (FetchList<K> | FetchListTuple<K>)[];

/**
 * 返回请求生成器工具
 * @param http 传入 HRequest 实例，返回对应批量生成器请求函数工具函数
 * @returns
 */
export const fetchFunctionBatchGeneratorCurry = (http: HRequest) => {
    function fetchFunctionBatchGenerator<T extends Record<string, any> = Record<string, any>>(fetchList: FetchListInput<keyof T>): GoodGenerateFetchFunctions<T> {
        const fetchFunctions = {};

        fetchList.forEach((fetchItem) => {
            const [key, url, method] = Array.isArray(fetchItem) ? fetchItem : [fetchItem.key, fetchItem.url, fetchItem.method];
            patchGenFetch(key, url, method);
        });

        return fetchFunctions as GoodGenerateFetchFunctions<T>;

        // -- 生成请求函数方法
        function patchGenFetch(key, url, method) {
            fetchFunctions[key] = async (data?: any, config: HttpConfig = {}) => {
                const fetchConfig = {url, method, ...config} as HRequestConfig;

                fetchConfig[method == "GET" ? "params" : "data"] = data;

                return http.request(fetchConfig);
            };
        }
    }
    return fetchFunctionBatchGenerator;
};
