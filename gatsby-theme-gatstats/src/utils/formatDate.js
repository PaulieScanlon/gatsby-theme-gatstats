export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const formatDateForPosts = srcDate => {
  if (srcDate) {
    const dateStr = new Date(srcDate)

    return `
    ${
      monthNames[dateStr.getMonth()]
    } ${dateStr.getDate()} ${dateStr.getFullYear()}`
  }

  return "__-__-__"
}
