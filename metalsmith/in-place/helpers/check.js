/**
 * Dependencies
 */
var match = require('multimatch');
var utf8 = require('is-utf8');

/**
 * Expose `check`
 */
module.exports = check;

/**
 * Helper for checking whether a file should be processed.
 *
 * @param {Object} files
 * @param {String} file
 * @param {String} pattern
 * @return {Boolean}
 */
function check(files, file, pattern){
  var data = files[file];

  // Don't process binary files
  if (!utf8(data.contents)) {
    return false;
  }

  // Only process files that match the pattern (if there is a pattern)
  if (pattern && !match(file, pattern)[0]) {
    return false;
  }

  return true;
}