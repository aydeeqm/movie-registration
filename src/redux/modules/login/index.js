import { combineEpics } from 'redux-observable';

// Actions
const SIGN_IN = 'modules/authentication/SIGN_IN';
const SIGN_IN_SUCCESS = 'modules/authentication/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'modules/authentication/SIGN_IN_ERROR';

const initialState = {
  user: null, // for this example we'll make an app that fetches and lists whiskies
  isLoading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const epic = combineEpics();
