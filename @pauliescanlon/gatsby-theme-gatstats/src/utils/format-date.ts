import { monthNames } from './month-names'

export const formatDate = (srcDate: string | null): string => {
  if (srcDate) {
    const dateStr = new Date(srcDate)

    return `${dateStr.getDate()}-${
      monthNames[dateStr.getMonth()]
    }-${dateStr.getFullYear()}`
  }
  return 'nn/sss/nnnn'
}
