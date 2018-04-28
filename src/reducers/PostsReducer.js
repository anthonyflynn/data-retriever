import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/Actions'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

export const PostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: []
      }
    default:
      return state;
  }
}
