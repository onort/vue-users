export const capitalize = (text) => {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const formatDate = (date) => {
  const toFormat = new Date(date).toString().split(' ')
  return `${toFormat[2]} ${toFormat[1]} ${toFormat[3]}`
}

// http://stackoverflow.com/questions/4060004/calculate-age-in-javascript/21984136#21984136
export const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
