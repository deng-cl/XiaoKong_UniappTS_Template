<script setup lang="ts">
import {UniqueKey_AppStore, useAppStore} from "@/store";
import {onLoad} from "@dcloudio/uni-app";

const AppStore = useAppStore();

onLoad(() => {
    // console.log(uni.$u.config.v);
});
</script>

<template>
    <view class="index-page">
        <view class="border-base center bg-primary">App - {{ AppStore.appName }}</view>
        <div class="border-base">33</div>
        <view class=""></view>
        <txw-aaa></txw-aaa>
        <up-button type="primary">333</up-button>
    </view>
</template>

<style lang="scss" scoped>
.index-page {
}
</style>
