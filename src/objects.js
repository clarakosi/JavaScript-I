// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objValues.length; i++) {
    obj[objKeys[i]] = cb(objValues[i]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  const key = Object.keys(obj);
  const value = Object.values(obj);

  for (let i = 0; i < value.length; i++) {
    arr.push([key[i], value[i]]);
  }
  return arr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  const myObj = {};

  for (let i = 0; i < objValues.length; i++) {
    myObj[objValues[i]] = objKeys[i];
  }
  return myObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objValues = Object.values(obj);
  const objKeys = Object.keys(obj);
  const defaultKey = Object.keys(defaultProps);
  for (let i = 0; i < objValues.length; i++) {
    defaultProps[objKeys[i]] = objValues[i];
  }
  return defaultProps;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
