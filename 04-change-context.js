function changeContext(func, obj) {
  let callReturn = func.call(obj);
  return callReturn;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
