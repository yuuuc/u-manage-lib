<script setup lang="ts">
import { TableColumns, getTableComponent } from '#components/Table'
import { TableImage } from '#components/Table/components/TableImage'

// setInterval(() => {
//   const now = new Date()
//   console.log(now.getHours(), now.getMinutes(), now.getSeconds())
// }, 1000)
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
    prop: 'image',
    width: '130px'
  },
  {
    type: 'custom',
    label: '自定义',
    prop: 'custom',
    width: '130px',
    custom: {
      component: TableImage,
      valHandle(val) {
        if (!val)
          return {
            src: ''
          }
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

const modifyClick = () => {
  data[0].address = '11111111111111'
  data[0].custom =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg;https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
}
</script>

<template>
  <div class="container">
    <Table :columns="columns"></Table>
    <button @click="addClick">add</button>
    <button @click="modifyClick">modify</button>
  </div>
</template>

<style scoped></style>
