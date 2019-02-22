export default function (item) {
  let result = item.question
  if (item.searchTerms && item.searchTerms.length) {
    item.searchTerms.forEach(t => {
      result = result.replace(t, `<b>${t}</b>`)
    })
  }

  return result
}
