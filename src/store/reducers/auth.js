import axios from '../../axios';

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_LOADING = 'AUTH/SET_LOADING';
const SET_ERROR = 'AUTH/SET_ERROR';
const SET_IS_AUTH = 'AUTH/SET_IS_AUTH';
const SET_USER_INVENTORY = 'AUTH/SET_USER_INVENTORY';

const isAuthInitial = !!window.localStorage.getItem('token');

const initialState = {
  isLoading: false,
  data: {
    inventory: {
      collections: [],
      nfts: [],
      favorited: [],
    },
  },
  errors: [],
  isAuth: isAuthInitial,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, data: action.payload };
    }
    case SET_USER_INVENTORY: {
      return {
        ...state,
        data: {
          ...state.data,
          inventory: { ...state.data.inventory, [action.payload.sort]: action.payload.data },
        },
      };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, errors: [...action.payload] };
    }
    case SET_IS_AUTH: {
      return { ...state, isAuth: action.payload };
    }

    default: {
      return state;
    }
  }
};

export const authMe = () => (dispatch) => {
  axios
    .post('/auth/me')
    .then((res) => {
      dispatch(setUserData(res.data));
      dispatch(setIsAuth(true));
    })
    .catch((err) => {
      window.localStorage.removeItem('token');
      dispatch(setIsAuth(false));
    });
};

export const getUserInventory = (sort) => (dispatch) => {
  dispatch(setLoading(true));

  axios
    .get('/users/inventory', {
      params: {
        sort,
      },
    })
    .then((res) => {
      dispatch(setUserInventory({ data: res.data, sort }));
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const loginisationSubmited =
  ({ data, setAlertError, reset }) =>
  (dispatch) => {
    const { email, password } = data;

    //Reset error state
    setAlertError(null);
    dispatch(setLoading(true));

    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((res) => {
        dispatch(setUserData(res.data));
        dispatch(setIsAuth(true));
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        reset({ password: '' });
        setAlertError(err.response.data.message);
      })
      .finally(() => {
        dispatch(setLoading(false));
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
        dispatch(setIsAuth(true));
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
export const setIsAuth = (data) => ({ type: SET_IS_AUTH, payload: data });
export const setUserInventory = (data) => ({ type: SET_USER_INVENTORY, payload: data });

export default AuthReducer;
