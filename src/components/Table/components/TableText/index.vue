<template>
  <div>
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="props.content"
      placement="top-start"
    >
      <span>{{ props.content }}</span>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  content: string
}>()
</script>

<style scoped></style>
