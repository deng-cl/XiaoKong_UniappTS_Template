import {BASE_URL, TIMEOUT} from "@/constants";
import {requestInterceptorHandle, responseInterceptorHandle} from "./interceptors";
import {fetchFunctionBatchGeneratorCurry, HRequest} from "./modules";

const http = new HRequest({
    baseURL: BASE_URL, // -- 服务端基础路径
    timeout: TIMEOUT,
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
