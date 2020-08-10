/* eslint-env browser */
'use strict';

/**
 * Collection of utility functions.
 */
const Utility = {};

/**
 * Returns the value of a given key in a URL query string. If no URL query
 * string is provided, the current URL location is used.
 * @param {string} name - Key name.
 * @param {?string} queryString - Optional query string to check.
 * @return {string} Query parameter value.
 * @private
 */
Utility.getUrlParameter = function(name, queryString) {
  const query = queryString || window.location.search;
  const param = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
  const results = regex.exec(query);
  return results === null ? '' :
      decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/**
 * Simple email validation.
 * @param {string} email - Email string to test.
 * @return {boolean} Whether the email is valid.
 */
Utility.isValidEmail = function(email) {
  return (/(.+)@(.+){2,}\.(.+){2,}/.test(email));
};

export default Utility;
