// Recursively flatten a provided array.
function flatten(arrayToFlatten) {
  // Use the spread operator to flatten the specified array once.
  const flattenedOnce = [].concat(...arrayToFlatten);
  // Recursively call flatten on nested arrays until we get our flat array.
  return flattenedOnce.some(Array.isArray) ? flatten(flattenedOnce) : flattenedOnce;
};

module.exports = flatten;
