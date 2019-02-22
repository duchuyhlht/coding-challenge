/* eslint-disable no-extend-native */

/**
 * Format string placeholders. Ex: 'Replace {0} with {1}'.format('a', 'b')
 */
if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match
    })
  }
}
