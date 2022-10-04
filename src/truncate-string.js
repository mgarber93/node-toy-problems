

function truncate(string, maximumLength) {
  if (string.length <= maximumLength) {
    return string;
  } else if (maximumLength > 3) {
    return `${string.slice(0, maximumLength - 3)}...`;
  } else {
    return `${string.slice(0, maximumLength)}...`;
  }
}

module.exports.truncate = truncate;