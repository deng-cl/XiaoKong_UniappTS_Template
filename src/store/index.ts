import {storage} from "@/utils/storeage";
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(
    createPersistedState({
        /* 使用自定义 storage 存储器 */
        storage: {
            getItem: storage.get.bind(storage),
            setItem: storage.set.bind(storage),
        },
        /* 自定义持久化插件序列化操作（取消该插件的自动序列化）→ 因为与所封装的 HStorage 工具的序列化有冲突，所以禁用该默认的序列化功能 */
        serializer: {
            serialize: (value) => value as any,
            deserialize: (value) => value as any,
        },
    })
);

export default pinia;

/* 统一导出 */
export * from "./app";
