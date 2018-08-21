'use strict';

var axios = require('axios');

/**
 * Call facebook graph api in order to ger user information from facebook
 * @param url
 * @returns {Promise}
 */
module.exports.getFBUserInfo = function (url) {
  return new Promise(function (resolve, reject) {
    console.log("url", url);
    axios.get(url)
      .then(function (response) {
        console.log("response");
        resolve(response);
      })
      .catch(function (error) {
        console.log("error", error);
        reject(error);
      })
      .then(function (value) {
        console.log("extecuted");
      })
  })
};