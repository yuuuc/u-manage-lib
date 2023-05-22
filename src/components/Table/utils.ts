import { DefineTableColumn } from './type'

export const TableColumns = () => {
  const columns: DefineTableColumn[] = []
  const append = (o: DefineTableColumn | DefineTableColumn[]) => {
    if (o instanceof Array) {
      columns.push(...o)
    } else {
      columns.push(o)
    }
    return entry
  }
  const entry = {
    append,
    columns
  }

  return entry
}
