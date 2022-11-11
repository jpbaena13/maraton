import requests from './requests';

const API = 'http://localhost:3000';

/**
 * API Calls
 */
export default {
  default: {
    /**
     * Creates a new  <User> according to the given object
     *
     * @param  {object} user <User> object
     *
     * @return {object}      A new <User> object
     */
    create: async (user) => {
      const response = await requests.post(
        `${API}/e`,
        user
      );

      return response;
    },

    /**
     * Returns the authenticated <User>
     *
     * @return {object}       JSON object <User>
     */
    read: async (id) => {
      const response = await requests.get(
        `${API}User/${id}`
      );

      return response;
    },

    /**
     * Update de given user
     *
     * @param  {object} user User data to update
     *
     * @return {object}       JSON object <User>
     */
    update: async (user) => {
      const response = await requests.put(
        `${API}/User/${user.id}`,
        user
      );

      return response;
    },

    /**
     * Delete the given user
     *
     * @param  {object} user User object to delete
     *
     * @return {object}       JSON object <Group>
     */
    delete: async (user) => {
      const response = await requests.delete(
        `${API}/User/${user.id}`,
        user
      );

      return response;
    },

    /**
     * Return all <Challenge>
     *
     * @return {object} JSON object with all <Challenge>
     */
    all: async () => {
      const response = await requests.get(`${API}/User`);
      return response;
    }
  },
  entities: {
    read: async (id) => {
      const response = await requests.get(
        `${API}/entities/${id}`
      );

      return response;
    },
    all: async () => {
      const response = await requests.get(
        `${API}/entities`
      );

      return response;
    }
  },
  activities: {
    read: async (id) => {
      const response = await requests.get(
        `${API}/activities/${id}`
      );

      return response;
    },
    all: async () => {
      const response = await requests.get(
        `${API}/activities`
      );

      return response;
    }
  }
};
