<script lang="ts" setup>
import { onMounted } from 'vue';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { useScriptTag } from '@vueuse/core'
useScriptTag(`//letere-gzj.github.io/hugo-stack/p/hugo/custom-background/sakura.js`)

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

</script>

<template>
    <YunFooter>
        <div style="display: flex; justify-content: center;">
            <img src="https://count.getloli.com/@:ZengziZhao?theme=booru-twifanartsfw" alt="Ciallo～(∠・ω< )⌒★">
        </div>
        <div id="aplayer"></div>
    </YunFooter>
</template>