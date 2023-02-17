import axios from '../../axios';

const SET_COLLECTIONS = 'SET_COLLECTIONS';
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';

const initialState = {
  isLoading: false,
  data: [],
  errors: [],
};

const CollectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTIONS: {
      return { ...state, data: action.payload };
    }
    case SET_ERROR: {
      return { ...state, errors: [...errors, action.payload] };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
  }
  return state;
};

export const fetchCollections = (limit) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios
    .get('/collections', {
      params: {
        limit,
        sort: 'ratings',
      },
    })
    .then((res) => {
      dispatch({ type: SET_COLLECTIONS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
    })
    .finally(() => {
      dispatch({ type: SET_LOADING, payload: false });
    });
};

export default CollectionsReducer;
