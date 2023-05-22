import { createVNode, reactive } from 'vue'
import TableConstruct from './index.vue'
import type { DefineTableColumn, TableProps } from './type'
import { TableColumns } from './utils'

/**
 * 创建 Table 组件实例
 * @param props
 * @returns
 */
const getTableComponent = (props: TableProps) => {
  const data = reactive<Record<string, string>[]>([
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      image:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      custom:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      image:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      custom:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      image:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      custom:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      image:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      custom:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg;https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
    }
  ])
  const vNode = createVNode(TableConstruct, {
    columns: props.columns,
    data
  })
  return {
    Table: vNode,
    data
  }
}

export { DefineTableColumn, TableColumns, getTableComponent }
