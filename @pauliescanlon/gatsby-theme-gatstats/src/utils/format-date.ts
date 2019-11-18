export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatDate = (srcDate: string | null): string => {
  if (srcDate) {
    const dateStr = new Date(srcDate)

    return `${dateStr.getDate()}-${
      monthNames[dateStr.getMonth()]
    }-${dateStr.getFullYear()}`
  }
  return 'nn/sss/nnnn'
}
