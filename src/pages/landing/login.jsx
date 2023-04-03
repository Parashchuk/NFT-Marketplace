import AlertTemplate from '../../components/utils/alertTemplate';
import Preloader from '../../components/utils/preloader';
import email from '../../assets/img/svg/email.svg';
import password from '../../assets/img/svg/lock.svg';
import eye from '../../assets/img/svg/eye.svg';
import eyeSlash from '../../assets/img/svg/eyeSlash.svg';
import backgroundShape from '../../assets/img/svg/backgroundShape1.svg';
import AuthHeader from '../../components/landing/authHeader';

import { loginisationSubmited } from '../../store/reducers/auth';
import { useLoginValidator } from '../../validations/login';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  //Require for UI display
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [allertError, setAlertError] = useState(null);

  //Require for hadnling input validation
  const { register, handleSubmit, reset, errors, isValid } = useLoginValidator();

  //Managing store
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuth = useSelector((state) => state.auth.isAuth);

  //Submit handler
  const submitHandler = () => {
    return handleSubmit((data) => dispatch(loginisationSubmited({ data, setAlertError, reset })));
  };

  //Redirect to Porfile page if user already made authorisation
  if (isAuth) return <Navigate to='/profile' />;

  return (
    <>
      {/* Show alert error */}
      <AlertTemplate
        type='error'
        title='Unsuccessful Authorisation'
        text={allertError}
        setter={setAlertError}
      />

      {/* Show loading */}
      {isLoading && <Preloader />}

      <div style={{ backgroundImage: `url(${backgroundShape})` }} className='login'>
        <AuthHeader />
        <div className='login__container'>
          <div className='login__title'>Welcome Back</div>
          <div className='login__subtitle'>Enter your email and password manually</div>
          <form onSubmit={submitHandler()}>
            <div className='login__form-field'>
              <label className='login__form-field__input-title' htmlFor='email'>
                Email
              </label>
              <div className='login__input-field'>
                <label className='login__input-field__label' htmlFor='email'>
                  <img src={email} alt='email' />
                </label>
                <input
                  placeholder='Enter your email adress'
                  type='text'
                  id='email'
                  {...register('email')}
                />
              </div>
              <div className='login__input-error'>{errors.email?.message}</div>
            </div>
            <div className='login__form-field'>
              <label className='login__form-field__input-title' htmlFor='password'>
                Password
              </label>
              <div className='login__input-field'>
                <label className='login__input-field__label' htmlFor='email'>
                  <img src={password} alt='password' />
                </label>
                <input
                  placeholder='Enter your pasworrd'
                  type={visiblePassword ? 'text' : 'password'}
                  id='password'
                  {...register('password')}
                />
                <img
                  onClick={() => setVisiblePassword((prev) => !prev)}
                  className='register__form-column__input-field__show'
                  src={visiblePassword ? eye : eyeSlash}
                  alt='show'
                />
              </div>
              <div className='login__input-error'>{errors.password?.message}</div>
            </div>
            <div className='login__remember-me'>
              <input id='rememberMe' type='checkbox' />
              <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <button
              disabled={!isValid}
              className='login__button button-template button-tertiary'
              type='submit'>
              Login
            </button>
          </form>
          <div className='login__register-suggest'>
            Don't have an account ? <Link to='/register'>Sign up for free</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
