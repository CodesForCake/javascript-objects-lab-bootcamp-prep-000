function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var cloneObj = Object.assign({},object);
  delete cloneObj.key;
  return cloneObj;
}

