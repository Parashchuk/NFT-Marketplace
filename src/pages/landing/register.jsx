import user from '../../assets/img/svg/user.svg';
import eye from '../../assets/img/svg/eye.svg';
import eyeSlash from '../../assets/img/svg/eyeSlash.svg';
import email from '../../assets/img/svg/email.svg';
import lock from '../../assets/img/svg/lock.svg';
import backgroundShape from '../../assets/img/svg/backgroundShape.svg';
import Preloader from '../../components/utils/preloader';
import ErrorAlert from '../../components/utils/errorAlert';
import AuthHeader from '../../components/landing/authHeader';

import { useRegisterValidator } from '../../validations/register';
import { onSubmit } from '../../store/reducers/auth';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [alertError, setAlertError] = useState(null);

  const { register, handleSubmit, setError, errors } = useRegisterValidator();

  const { isLoading } = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  if (isLoading) return <Preloader />;
  if (window.localStorage.getItem('token')) return <Navigate to='/profile' />;

  return (
    <>
      {alertError && <ErrorAlert error={alertError} />}
      <div style={{ backgroundImage: `url(${backgroundShape})` }} className='register'>
        <AuthHeader />
        <div className='register__form-column'>
          <h1 className='register__form-column__title'>Create Account</h1>
          <div className='register__form-column__subtitle'>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </div>
          <form
            onSubmit={handleSubmit((data) =>
              dispatch(onSubmit({ data, setError, setAlertError }))
            )}>
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
