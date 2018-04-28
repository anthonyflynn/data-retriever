import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './Actions'

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}

const fetchPostsBegin = () => ({
  type: FETCH_DATA
});

const fetchPostsSuccess = (posts) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {posts}
});

const fetchPostsFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: {error}
});

export const fetchData = (dispatch) => {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPostsSuccess(json))
        return json;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchPostsFailure(error))
      });
  };
}
