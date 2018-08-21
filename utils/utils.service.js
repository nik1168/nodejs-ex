'use strict';

/**
 * Build request url based on request information array
 * @param requestInfoArray
 * @returns {*}
 */
module.exports.getFacebookInfoRequestString = function (requestInfoArray) {
  var response = requestInfoArray.reduce(function (acc, item) {
    return acc + item + ','
  },'');
  return response.length ? response.slice(0,-1) : response;
};