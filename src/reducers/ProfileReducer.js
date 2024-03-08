import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data.user,
        posts: action.data.posts,
      };
    }
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        user: action.data,
        loading: false,
      };
    }
    case actions.profile.IMAGE_UPDATED: {
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
        loading: false,
      };
    }

    case actions.profile.default: {
      return state;
    }
  }
};

export { ProfileReducer, initialState };
