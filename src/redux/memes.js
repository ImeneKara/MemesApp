const INIT_STATE = {
    memes: []
  };
  
  export const GET_MEMES_REQUEST = 'GET_MEMES_REQUEST';
  export const GET_MEMES_SUCCESS = 'GET_MEMES_SUCCESS';
  export const GET_MEMES_FAILED = 'GET_MEMES_FAILED';
  
  export const getMemesRequest = () => ({
    type: GET_MEMES_REQUEST
  });
  
  export const getMemesSuccess = memes => ({
    type: GET_MEMES_SUCCESS,
    payload: {
      memes
    }
  });
  
  export const getMemesFailed= () => ({
    type: GET_MEMES_FAILED,
  });
  
  export const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_MEMES_SUCCESS:
        return {
          ...state,
          memes: action.payload.memes
        };
      default:
        return state;
    }
  };