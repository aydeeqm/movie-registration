import switchCase from '~utils/switchCase';

const initialState = {
  info: [],
  creating: false,
  deleting: false,
  updating: false,
  errorMessage: 'error',
}

// Actions
const FETCH_INFORMATION = 'modules/collection/FETCH_INFORMATION';
const CREATE_INFORMATION = 'modules/collection/CREATE_INFORMATION';
/* const UPDATE_INFORMATION = 'modules/collection/UPDATE_INFORMATION';
const DELETE_INFORMATION = 'modules/collection/DELETE_INFORMATION'; */
const RESET_INFORMATION = 'modules/collection/RESET_INFORMATION';

const onReset = state => ({
  ...state,
  creating: false,
  deleting: false,
  updating: false, 
});

const onFetch = info => ({ ...initialState, info });

const onCreateMovie = state => ({ ...state, creating: true });



// Reducers
export default function reducer(state = initialState, action) {
  return switchCase({
    [RESET_INFORMATION]: () => onReset(state),
    [FETCH_INFORMATION]: () => onFetch(action.payload),
    [CREATE_INFORMATION]: () => onCreateMovie(state),
  })(state)(action.type)
};

// Action Creators
export const fetchInformation = info => ({
  type: FETCH_INFORMATION,
  payload: info,
});

export const createMovie = () => ({
  type: CREATE_INFORMATION,
});

export const resetInformation = () => ({
  type: RESET_INFORMATION,
});

export const getInformation = state => state.movies;
