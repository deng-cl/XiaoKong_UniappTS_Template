<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";
import {initFonts} from "./static/fonts";
onLaunch(() => {
    console.log("App Launch");
    /* 加载自定义字体 */
    initFonts();
});
onShow(() => {
    console.log("App Show");
});
onHide(() => {
    console.log("App Hide");
});
</script>
<style></style>

