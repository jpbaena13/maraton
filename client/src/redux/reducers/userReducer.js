import {
  SET_AUTH_USER,
  SET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER
} from '../action-types';

const initialState = {
  authUser: undefined,
  users: undefined,
  searchText: undefined
};

const userReducer = (state = initialState, action) => {
  let users;
  let index = -1;

  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, authUser: action.payload.user };

    case SET_USERS:
      return { ...state, users: action.payload.users };

    case ADD_USER:
      return { ...state, users: [...state.users, action.payload.user] };

    case UPDATE_USER:
      if (!state.users) return state;

      users = [...state.users];
      users.forEach((usr, idx) => {
        if (usr.id === action.payload.user.id) {
          users[idx] = action.payload.user;
        }
      });

      return { ...state, users };

    case DELETE_USER:
      users = [...state.users];
      users.forEach((usr, idx) => {
        if (usr.id === action.payload.user.id) {
          index = idx;
        }
      });

      if (index >= 0) {
        users.splice(index, 1);
      }

      return { ...state, users };

    case SEARCH_USER:
      return { ...state, users: state.users, searchText: action.payload.searchText };

    default:
      return state;
  }
};

export default userReducer;
