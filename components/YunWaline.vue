<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
onMounted(() => {
  const email = document.getElementById('wl-mail');
  const textarea = document.getElementById('wl-edit');
  textarea.placeholder = `📧本站已开启邮件通知，回复您评论的同时会email到您的邮箱，因此请确保邮箱的有效性`;
  // 输入qq邮箱后头像转换
  email.onblur = () => {
    const text = email.value;
    let qqImg;
    if (!text) {
      qqImg = 'https://s2.loli.net/2025/01/11/cyAaklriH9bGE4g.webp'
    } else {
      const regex = /^([^@]+)/;
      const qq = text.match(regex)[1];
      qqImg = `https://thirdqq.qlogo.cn/g?b=sdk&nk=${qq}&s=140 `;
    }
    const img = document.getElementById('img') as HTMLImageElement;
    if (img) {
      img.src = qqImg;
    }
  }
  window.addEventListener('storage', handleStorageChange);
  const span = document.querySelector('.comment-tooltip span');
  if (localStorage.getItem('vueuse-color-scheme') == 'dark') {
    span.style.color = '#fff';
  } else {
    span.style.color = '#333333'
  }

})
onBeforeUnmount(() => {
  window.removeEventListener('storage', handleStorageChange);
})
function handleStorageChange(event) {
  const span = document.querySelector('.comment-tooltip span');
  if (event.key === 'vueuse-color-scheme') {
    if (event.newValue == 'dark') {
      span.style.color = '#fff';
    }else{
      span.style.color = '#333333'
    }
  }

}

</script>

<template>
  <div class="container">
    <div class="comment-tooltip text-center">
      <span>要不要和我说些什么？</span><br>
    </div>
    <WalineClient w="full" :options="addon.options" />
    <div class="avatar">
      <img id="img" src="https://s2.loli.net/2025/01/11/cyAaklriH9bGE4g.webp" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;

  .comment-tooltip {
    font-size: .8rem;
    color: #333333;
    padding: .5rem;
    border: 1px solid #f0f0f0;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 10px;
  }

  .avatar {
    position: absolute;
    top: 63px;
    left: -52px;

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
  }
}
</style>