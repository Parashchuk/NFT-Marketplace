import axios from '../../axios';

const SET_USERS = 'Users/SET_USERS';
const SET_ERROR = 'Users/SET_ERROR';
const SET_LOADING = 'Users/SET_LOADING';

const initialState = {
  isLoading: true,
  data: [],
  errors: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
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

export const fetchUsers = (limit) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  axios
    .get('/users', {
      params: {
        limit,
        sort: 'totalSales',
      },
    })
    .then((res) => {
      dispatch({ type: SET_USERS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
    })
    .finally(() => {
      dispatch({ type: SET_LOADING, payload: false });
    });
};

export default UsersReducer;
