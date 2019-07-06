const requests = require('superagent');
module.exports = {
  /**
   * Generic get request 
   * @param {String} token - API access token
   * @param {String} url - URL to hit with get request
   * @returns {Promise} - promise resolving requested object(s)
   */
  get: (token, url) => {
    return new Promise((resolve, reject) => {
      requests.get(url)
      .set('Authorization', token)
      .then((res) => {
          resolve(res);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.text);
        }else {
          reject(error);
        }
        
      });
    });
  },

  /**
   * Generic post request
   * @param {String} token - API access token
   * @param {String} url - URL to hit with post request
   * @param {Object} body - payload of post request
   * @returns {Promise} - promise which resolves to response
   */
  post: (token, url, body) => {
    return new Promise((resolve, reject) => {
      requests.post(url)
      .set('Authorization', token)
      .send(body)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.text);
        }else {
          reject(error);
        }
      });
    });
  },

    /**
   * Generic patch request
   * @param {String} token - API access token
   * @param {String} url - URL to hit with patch request
   * @param {Object} body - payload of patch request
   * @returns {Promise} - promise which resolves to response
   */
  patch: (token, url, body) => {
    return new Promise((resolve, reject) => {
      requests.patch(url)
      .set('Authorization', token)
      .send(body)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.text);
        }else {
          reject(error);
        }
      });
    });
  },
}