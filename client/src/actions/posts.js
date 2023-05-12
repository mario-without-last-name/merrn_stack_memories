import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => { // this is using redux thunk
  /*
  const action = { type: 'FETCH_ALL', payload: [] }
  dispatch(action);  //Previously:  return action;
  */
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => { // this is using redux thunk
  try {
    const { data } = await api.createPost(post);
    dispatch({type:'CREATE', payload:data});
  } catch (error) {
    console.log(error.message);
  }
}