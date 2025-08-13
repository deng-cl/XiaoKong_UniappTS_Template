<script setup lang="ts">
import {UniqueKey_AppStore, useAppStore} from "@/store";
import {onLoad} from "@dcloudio/uni-app";
import {storage} from "../../utils/storeage";

const AppStore = useAppStore();

onLoad(() => {});
</script>

<template>
    <view class="index-page"> App - {{ AppStore.appName }}</view>
</template>

<style lang="scss" scoped></style>
