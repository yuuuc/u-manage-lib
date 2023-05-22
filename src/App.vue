<script setup lang="ts">
import { TableColumns, getTableComponent } from '#components/Table'
import { TableImage } from '#components/Table/components/TableImage'

const columns = TableColumns().append([
  {
    type: 'text',
    label: '日期',
    prop: 'date'
  },
  {
    type: 'text',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'text',
    label: '地址',
    prop: 'address',
    width: '300px'
  },
  {
    type: 'image',
    label: '图片',
    prop: 'image'
  },
  {
    type: 'custom',
    label: '自定义',
    prop: 'custom',
    custom: {
      component: TableImage,
      valHandle(val) {
        const vals = val.split(';')
        return {
          src: vals.length >= 2 ? vals[1] : vals[0]
        }
      }
    }
  }
]).columns
const { Table, data } = getTableComponent({ columns })
const addClick = () => {
  data.push({
    date: '2016-05-01',
    name: 'Tom2222',
    address: 'No. 189, Grove St, Los Angeles222222'
  })
}
</script>

<template>
  <div class="container">
    <Table :columns="columns"></Table>
    <button @click="addClick">add</button>
  </div>
</template>

<style scoped></style>
