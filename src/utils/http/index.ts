import {requestInterceptorHandle, responseInterceptorHandle} from "./interceptors";
import {fetchFunctionBatchGeneratorCurry, HRequest} from "./modules";

const http = new HRequest({
    baseURL: import.meta.env.VITE_APP_API, // -- 服务端基础路径
    timeout: 10000,
    interceptors: {
        // -- 实例请求拦截
        requestInterceptor(config) {
            return requestInterceptorHandle(config);
        },
        // -- 实例响应拦截
        responseInterceptor(response) {
            return responseInterceptorHandle(response);
        },
    },
});

const fetchFunctionBatchGenerator = fetchFunctionBatchGeneratorCurry(http);

export {http, fetchFunctionBatchGenerator};
