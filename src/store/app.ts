import {STORAGE_NAMESPACE} from "@/constants";
import {defineStore} from "pinia";
import {ref} from "vue";

export const UniqueKey_AppStore = `app-store`; // -- Store 唯一 ID → persistedState 持久化存储也会也该 key 进行存储
export const useAppStore = defineStore(
    UniqueKey_AppStore,
    () => {
        const appName = "txw";
        const appVersion = "1.0.0";

        return {appName, appVersion};
    },
    {
        persist: {
            pick: ["appName"],
        },
    }
);
