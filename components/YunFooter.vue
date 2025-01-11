<script lang="ts" setup>
import { onMounted } from 'vue';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { useScriptTag } from '@vueuse/core'
useScriptTag(
    '/sakura.js',
    () => {
        console.log('Script loaded successfully!')
    },
    { async: true }
)

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
        <business-card></business-card>
        <div style="display: flex; justify-content: center;">
            <img src="https://count.getloli.com/@:ZengziZhao?theme=booru-twifanartsfw" alt="Zzz">
        </div>
        <div id="aplayer"></div>
    </YunFooter>
</template>