/**
 * Simple search function. if the field contains text it is top layer, next is broken text
 * @param {String} text Search text
 * @param {Array} list List to search
 * @param {String} field field of item to check
 */
export function searchList (text, list, field) {
  if (!text || !text.length) {
    list.forEach(item => {
      item.score = 0
      item.searchTerms = []
    })
    return list
  }

  let normalizedText = text.trim().toLowerCase()
  let brokenTexts = normalizedText.split(' ')

  list.forEach(item => {
    item.score = 0
    item.searchTerms = []

    // first layer
    let value = item[field].toLowerCase()

    if (value.indexOf(normalizedText) !== -1) {
      item.score = 1
      item.searchTerms.push(normalizedText)
    }

    // second layer
    brokenTexts.forEach(word => {
      if (value.indexOf(word) !== -1) {
        item.score += 1
        item.searchTerms.push(word)
      }
    })
  })

  // might want to remove score
  return list.filter(item => item.score > 0).sort((a, b) => b.score - a.score)
}
