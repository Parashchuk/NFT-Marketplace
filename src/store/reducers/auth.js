import axios from '../../axios';

const REGISTER = 'AUTH/REGISTER';
const LOGIN = 'AUTH/LOGIN';
const SET_LOADING = 'AUTH/SET_LOADING';
const SET_ERROR = 'AUTH/SET_ERROR';

const initialState = {
  isLoading: true,
  data: [],
  errors: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return { ...state, data: action.payload };
    }
    case LOGIN: {
      return { ...state, data: action.payload };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, errors: [...action.payload] };
    }

    default: {
      return state;
    }
  }
};

export const onSubmit =
  ({ data, setError, setAlertError }) =>
  (dispatch) => {
    //Reset previous state
    setAlertError(null);
    setError(null);
    dispatch(setLoading(true));

    const { username, password, email } = data;

    axios
      .post('/auth/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        setError(err.response.data.field, {
          type: 'server',
          message: err.response.data.message,
        });
        setAlertError(err.response.data.message);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

export const setLoading = (data) => ({ type: SET_LOADING, payload: data });

export default AuthReducer;
