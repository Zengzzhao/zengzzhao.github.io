<script lang="ts" setup>
import { onMounted } from 'vue';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { useScriptTag } from '@vueuse/core'
useScriptTag('/sakura.js')

onMounted(() => {
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        order: 'random',
        audio: [
            {
                name: '酒馆儿',
                artist: '蛋黄',
                url: 'https://music.163.com/song/media/outer/url?id=1466888386.mp3',
                cover: 'https://p2.music.126.net/yKVO0wAri_TPgq1ds12e2w==/109951165184677384.jpg?param=130y130',
            }
        ]
    });
});
/* fps检测 start */
if (window.localStorage.getItem("fpson") == undefined || window.localStorage.getItem("fpson") == "1") {
  var rAF = function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }();
  var frame = 0;
  var allFrameCount = 0;
  var lastTime = Date.now();
  var lastFameTime = Date.now();
  var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);

    lastFameTime = now;
    // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
    allFrameCount++;
    frame++;

    if (now > 1000 + lastTime) {
      var fps = Math.round((frame * 1000) / (now - lastTime));
      if (fps <= 5) {
        var kd = `<span style="color:#bd0000">卡成ppt🤢</span>`
      } else if (fps <= 15) {
        var kd = `<span style="color:red">电竞级帧率😖</span>`
      } else if (fps <= 25) {
        var kd = `<span style="color:orange">有点难受😨</span>`
      } else if (fps < 35) {
        var kd = `<span style="color:#9338e6">不太流畅🙄</span>`
      } else if (fps <= 45) {
        var kd = `<span style="color:#08b7e4">还不错哦😁</span>`
      } else {
        var kd = `<span style="color:#087EED">十分流畅🤣</span>`
      }
      document.getElementById("fps").innerHTML = `FPS:${fps} ${kd}`;
      frame = 0;
      lastTime = now;
    };

    rAF(loop);
  }

  loop();
} else {
  document.getElementById("fps").style = "display:none!important"
}
/* fps检测 end */
</script>

<template>
    <YunFooter>
        <VCLiveTime start-time="2025-01-04">
            <template #live-time-before>
                <span>本站已运行</span>
            </template>
            <!-- <template #live-time-after>
            </template> -->
        </VCLiveTime>
        <business-card></business-card>
        <div style="display: flex; justify-content: center;">
            <img src="https://count.getloli.com/@:ZengziZhao?theme=booru-twifanartsfw" alt="Zzz">
        </div>
        <div id="aplayer"></div>
        <div id="fps"></div>
    </YunFooter>
</template>