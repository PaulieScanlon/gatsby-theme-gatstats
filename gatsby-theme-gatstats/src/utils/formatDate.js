export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const formatDate = srcDate => {
  if (srcDate) {
    const dateStr = new Date(srcDate)

    return `
    ${
      monthNames[dateStr.getMonth()]
    }${" "} ${dateStr.getDate()}, ${dateStr.getFullYear()}`
  }
  return "__-__-__"
}
