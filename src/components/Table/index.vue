<template>
  <el-table :data="props.data" border>
    <el-table-column
      v-for="item in props.columns"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
    >
      <template #default="scope">
        <TableText
          v-if="item.type === 'text'"
          :content="scope.row[item.prop]"
        ></TableText>
        <TableImage
          v-if="item.type === 'image'"
          :src="scope.row[item.prop]"
        ></TableImage>
        <component
          v-if="item.type === 'custom'"
          :is="CustomComponent(item.custom, scope.row[item.prop])"
        ></component>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { VNode, createVNode } from 'vue'
import { TableText } from './components/TableText'
import { TableImage } from './components/TableImage'
import { DefineTableColumn } from './type'

const props = defineProps<{
  columns: DefineTableColumn[]
  data: Record<string, string>[]
}>()

const CustomComponent = (
  c: DefineTableColumn['custom'],
  val: string
): VNode => {
  const vNode = createVNode(c?.component!, c?.valHandle(val))
  return vNode
}
</script>

<style scoped></style>
