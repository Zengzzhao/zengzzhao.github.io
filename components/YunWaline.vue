<script lang="ts" setup>
import { useAddonWaline } from 'valaxy-addon-waline'

const addon = useAddonWaline()
</script>

<template>
    要不要和我说些什么？
  <WalineClient w="full" :options="addon.options" />
</template>