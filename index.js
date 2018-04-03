// Recursively flatten a provided array.
function flatten(arrayToFlatten) {
  // The spread operator as parameters flattens the array by one level of depth 
  const flattenedOnce = [].concat(...arrayToFlatten);
  return flattenedOnce.some(Array.isArray) ? flatten(flattenedOnce) : flattenedOnce;
};

module.exports = flatten;
