import { Component } from 'vue'
export type DefineTableColumn = {
  type: 'text' | 'image' | 'custom'
  prop: string
  label: string
  width?: string
  custom?: {
    component: Component
    valHandle: (val: string) => Record<string, any>
  }
}

export type TableProps = {
  columns: DefineTableColumn[]
  data?: Record<string, string>[]
}
