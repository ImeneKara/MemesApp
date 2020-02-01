const INIT_STATE = {
};

export const POST_MEME_REQUEST = 'POST_MEME_REQUEST';
export const POST_MEME_SUCCESS = 'POST_MEME_SUCCESS';
export const POST_MEME_FAILED = 'POST_MEME_FAILED';

export const postMemeRequest = (title, image) => ({
  type: POST_MEME_REQUEST,
  payload: {
    title,
    image
  }
});

export const postMemeSuccess = () => ({
  type: POST_MEME_SUCCESS
});

export const postMemeFailed = () => ({
  type: POST_MEME_FAILED
});

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};