const INIT_STATE = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : 'Anonymous'
  };
  // ACTIONS
  export const SET_USERNAME = 'SET_USERNAME';
  // ACTIONS CREATORS
  export const setUsername = username => ({
    type: SET_USERNAME,
    payload: {
      username
    }
  });
  
  export const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SET_USERNAME:
        localStorage.setItem('username', action.payload.username);
        return {
          ...state,
          username: action.payload.username
        };
      default:
        return state;
    }
  };