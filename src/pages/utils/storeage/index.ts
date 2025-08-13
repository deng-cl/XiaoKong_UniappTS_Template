import {STORAGE_NAMESPACE} from "@/constants";
import HStorage from "./storeage-wrap";

export const storage = new HStorage({
    namespace: STORAGE_NAMESPACE,
    encrypt: false,
});
