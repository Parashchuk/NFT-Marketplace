import user from '../../assets/img/svg/user.svg';
import eye from '../../assets/img/svg/eye.svg';
import eyeSlash from '../../assets/img/svg/eyeSlash.svg';
import email from '../../assets/img/svg/email.svg';
import lock from '../../assets/img/svg/lock.svg';
import backgroundShape from '../../assets/img/svg/backgroundShape.svg';
import Preloader from '../../components/utils/preloader';
import AlertTemplate from '../../components/utils/alertTemplate';
import AuthHeader from '../../components/landing/authHeader';

import { useRegisterValidator } from '../../validations/register';
import { registrationSubmitted } from '../../store/reducers/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Constants text for display in alerts
const infoAlerts = {
  collections: "To see Collections you need to login or if you don't have account register first",
  hero: "To see more NFT and even create yours - you need to login or if you don't have account register first",
  creators:
    "To see Ranked of creators you need to login or if you don't have account register first",
  categories:
    "To see Category of NFTs you need to login or if you don't have account register first",
  discover:
    "To see more NFT collections you need to login or if you don't have account register first",
  highlight:
    "To see more NFTs and even create yours you need to login or if you don't have account register first",
  creators:
    "To see ranked of creators you need to login or if you don't have account register first",
};

const Register = () => {
  //Require for UI input buttons that shows and hide password inputs
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  //Require for UI to show custom Alert pop-ups
  const [alertError, setAlertError] = useState(null);
  const [alertInfo, setAlertInfo] = useState(null);

  //Require for hadnling input validation
  const { register, handleSubmit, setError, errors, isValid } = useRegisterValidator();

  //Get some essential variables
  const { isLoading } = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const location = useLocation();

  //Read hash from url and if it's there show alert
  useEffect(() => {
    if (infoAlerts[location.hash.slice(1)]) {
      setAlertInfo(infoAlerts[location.hash.slice(1)]);
    }
  }, []);

  //Handler for submit form
  const submitHandler = () => {
    return handleSubmit((data) => {
      dispatch(registrationSubmitted({ data, setError, setAlertError, isValid }));
    });
  };

  //Show preloader if loading
  if (isLoading) return <Preloader />;
  console.log(isLoading);

  //Redirect to Porfile page if user already made authorisation
  if (window.localStorage.getItem('token')) return <Navigate to='/get-started' />;

  return (
    <>
      {/* Show alert error */}
      <AlertTemplate
        title='Unsuccessful Registration'
        type='error'
        text={alertError}
        setter={setAlertError}
      />

      {/* Show alert info */}
      <AlertTemplate
        type='info'
        text={alertInfo}
        title='You need to make authorisation first'
        setter={setAlertInfo}
      />

      {/* Show loading */}
      {isLoading && <Preloader />}

      <div style={{ backgroundImage: `url(${backgroundShape})` }} className='register'>
        <AuthHeader />
        <div className='register__form-column'>
          <h1 className='register__form-column__title'>Create Account</h1>
          <div className='register__form-column__subtitle'>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </div>
          <form onSubmit={submitHandler()}>
            <div className='register__form-column__wrapper'>
              <label className='register__form-column__input-title' htmlFor='username'>
                Username
              </label>
              <div
                className={
                  'register__form-column__input-field' +
                  (errors.username?.message ? ' register__inpurt-border-error' : '')
                }>
                <label className='register__form-column__input-field__label' htmlFor='username'>
                  <img src={user} alt='user' />
                </label>
                <input
                  autoComplete='off'
                  id='username'
                  type='text'
                  placeholder='Enter your name'
                  {...register('username')}
                />
              </div>
              <div className='register__form-column__input-error'>{errors.username?.message}</div>
            </div>
            <div className='register__form-column__wrapper'>
              <label className='register__form-column__input-title' htmlFor='email'>
                Email
              </label>
              <div
                className={
                  'register__form-column__input-field' +
                  (errors.email?.message ? ' register__inpurt-border-error' : '')
                }>
                <label className='register__form-column__input-field__label' htmlFor='email'>
                  <img src={email} alt='email' />
                </label>
                <input
                  autoComplete='off'
                  id='email'
                  type='text'
                  placeholder='Enter your email address'
                  {...register('email')}
                />
              </div>
              <div className='register__form-column__input-error'>{errors.email?.message}</div>
            </div>
            <div className='register__form-column__wrapper'>
              <label className='register__form-column__input-title' htmlFor='password'>
                Password
              </label>
              <div
                className={
                  'register__form-column__input-field' +
                  (errors.password?.message ? ' register__inpurt-border-error' : '')
                }>
                <label className='register__form-column__input-field__label' htmlFor='password'>
                  <img src={lock} alt='lock' />
                </label>
                <input
                  autoComplete='off'
                  id='password'
                  type={visiblePassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  {...register('password')}
                />
                <img
                  onClick={() => setVisiblePassword((prev) => !prev)}
                  className='register__form-column__input-field__show'
                  src={visiblePassword ? eye : eyeSlash}
                  alt='show'
                />
              </div>
              <div className='register__form-column__input-error'>{errors.password?.message}</div>
            </div>
            <div className='register__form-column__wrapper'>
              <label className='register__form-column__input-title' htmlFor='passwordConfirm'>
                Confirm Password
              </label>
              <div
                className={
                  'register__form-column__input-field' +
                  (errors.passwordConfirm?.message ? ' register__inpurt-border-error' : '')
                }>
                <label
                  className='register__form-column__input-field__label'
                  htmlFor='passwordConfirm'>
                  <img src={lock} alt='lock' />
                </label>
                <input
                  autoComplete='off'
                  id='passwordConfirm'
                  type={visibleConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm your password'
                  {...register('passwordConfirm')}
                />
                <img
                  onClick={() => setVisibleConfirmPassword((prev) => !prev)}
                  className='register__form-column__input-field__show'
                  src={visibleConfirmPassword ? eye : eyeSlash}
                  alt='show'
                />
              </div>
              <div className='register__form-column__input-error'>
                {errors.passwordConfirm?.message}
              </div>
            </div>
            <button
              disabled={!isValid}
              className='register__form-column__input-submit button-template button-tertiary'
              type='submit'>
              Create Account
            </button>
          </form>
          <div className='register__form-column__login-suggest'>
            Already have an account ? <Link to='/login'>Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
