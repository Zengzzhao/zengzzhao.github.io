<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
onMounted(() => {
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
}
</style>