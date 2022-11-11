export default {
  /**
   * GET request
   *
   * @param  string url
   *
   * @return {object}     Response object
   */
  get: async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  },

  /**
   * POST request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {object}     Response object
   */
  post: async (url, body = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        _token: _laravel.token
      })
    });

    return response.json();
  },

  /**
   * POST request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {object}     Response object
   */
  put: async (url, body = {}) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        _token: _laravel.token
      })
    });

    return response.json();
  },

  /**
   * DELETE request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {object}     Response object
   */
  delete: async (url, body = {}) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        _token: _laravel.token
      })
    });

    return response.json();
  }
};
