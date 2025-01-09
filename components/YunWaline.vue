<script lang="ts" setup>
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
</script>

<template>
  <div class="comment-tooltip text-center"><span>要不要和我说些什么？</span><br></div>
  <WalineClient w="full" :options="addon.options" />

</template>

<style scoped lang="less">
.comment-tooltip {
  font-size: .8rem;
  color: #333333;
  padding: .5rem;
  border: 1px solid #f0f0f0;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 10px;
}
</style>