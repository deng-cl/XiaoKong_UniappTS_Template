<script setup lang="ts">
import {UniqueKey_AppStore, useAppStore} from "@/store";

const AppStore = useAppStore();
</script>

<template>
    <view class="index-page"> App - {{ AppStore.appName }}</view>
</template>

<style lang="scss" scoped>
.index-page {
}
</style>
