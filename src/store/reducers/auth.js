import axios from '../../axios';

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_LOADING = 'AUTH/SET_LOADING';
const SET_ERROR = 'AUTH/SET_ERROR';

const initialState = {
  isLoading: true,
  data: [],
  errors: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
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

export const loginisationSubmited =
  ({ data, setAlertError, reset }) =>
  (dispatch) => {
    const { email, password } = data;

    //Reset error state
    setAlertError(null);
    setLoading(true);

    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((res) => {
        dispatch(setUserData(res.data));
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        reset({ password: '' });
        setAlertError(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

export const registrationSubmitted =
  ({ data, setError, setAlertError }) =>
  (dispatch) => {
    const { username, password, email } = data;

    //Reset previous state
    setAlertError(null);
    setError(null);
    dispatch(setLoading(true));

    axios
      .post('/auth/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        dispatch(setUserData(res.data));
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

export const setUserData = (data) => ({ type: SET_USER_DATA, payload: data });
export const setLoading = (data) => ({ type: SET_LOADING, payload: data });

export default AuthReducer;
