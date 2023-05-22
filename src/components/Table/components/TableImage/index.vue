<template>
  <el-image
    style="width: 100px; height: 100px"
    :src="props.src"
    fit="cover"
    :preview-src-list="[props.src]"
    :preview-teleported="true"
  />
</template>

<script lang="ts" setup>
const props = defineProps<{
  src: string
}>()
</script>

<style scoped></style>
