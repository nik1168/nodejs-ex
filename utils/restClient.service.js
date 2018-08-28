'use strict';

var axios = require('axios');

/**
 * Call facebook graph api in order to ger user information from facebook
 * @param url
 * @returns {Promise}
 */
module.exports.getFBUserInfo = function (url) {
  return new Promise(function (resolve, reject) {
    axios.get(url)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      })
      .then(function (value) {
      })
  })
};

/**
 * Get user information from google
 * @param url
 * @param access_token
 * @returns {Promise<any>}
 */
module.exports.getGoogleUserInfo = function (url, access_token) {
  return new Promise(function (resolve, reject) {
    axios.get(url, {
      headers: {'Authorization': 'Bearer '+access_token+''}
    })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      })
      .then(function (value) {
      })
  })
};