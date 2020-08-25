function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key];
  return object;
}