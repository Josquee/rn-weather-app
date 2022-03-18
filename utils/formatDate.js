export const formatDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = (1 + today.getMonth()).toString().padStart('2', 0)
  const day = today.getDate().toString().padStart('2', 0)
  return `${year}-${month}-${day}`
}
