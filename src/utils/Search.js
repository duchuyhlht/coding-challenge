import { isString } from './Compare'

function checkValidSearchTerms () {
  for (let i = 0; i < arguments.length; i++) {
    let t = arguments[i]
    if (!t || !t.length) return false
  }

  return true
}

/**
 * Simple search function. if the field equals text it is top layer, next is contains text
 * @param {String} text Search text
 * @param {Array} list List to search
 * @param {String} field field of item to check
 */
export function searchList (text, list, fields) {
  if (!checkValidSearchTerms(text, list, fields)) return list

  list = list.map(item => {
    return {
      ...item,
      searchScore: 0
    }
  })

  fields.forEach(f => {
    searchListField(text, list, f)
  })

  return list.filter(item => item.searchScore > 0).sort((a, b) => b.searchScore - a.searchScore)
}

export function searchListField (text, list, field) {
  let normalizedText = `${text}`.trim().toLowerCase()

  list.forEach(item => {
    let value = `${item[field]}`.toLowerCase()
    let add = 0

    if (normalizedText === value) {
      add = 1000
    } else if (isString(item[field])) {
      add = value.indexOf(normalizedText) !== -1 ? 1 : 0
    }

    item.searchScore += add
  })

  // might want to remove searchScore
  return list
}
