import user from '../assets/img/svg/user.svg';
import eye from '../assets/img/svg/eye.svg';
import eyeSlash from '../assets/img/svg/eyeSlash.svg';
import email from '../assets/img/svg/email.svg';
import lock from '../assets/img/svg/lock.svg';
import placeholder from '../assets/img/placeholders/register_placeholder.png';
import Preloader from '../components/utils/preloader';
import ErrorAlert from '../components/utils/errorAlert';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from '../axios';
import { useState } from 'react';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [alertError, setAlertError] = useState(null);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const shcema = yup.object().shape({
    username: yup
      .string()
      .min(4, 'Username must have at least 4 symbols')
      .max(15, "Username can't be more then 15 symbols")
      .required("Username can't be blank"),
    email: yup.string().email('Enter a valid Email').required("Email can't be blank"),
    password: yup
      .string()
      .min(4, 'Password must have at least 4 symbols')
      .max(20, "Password can't be more then 20 symbols")
      .required("Password can't be blank"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required("Password confirmation can't be blank"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shcema),
  });

  const onSubmit = (data) => {
    //Reset previous state
    setError(null);

    const { username, password, email } = data;
    setIsLoading(true);
    axios
      .post('/auth/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        setRegistrationSuccess(true);
      })
      .catch((err) => {
        setError(err.response.data.field, {
          type: 'server',
          message: err.response.data.message,
        });
        setAlertError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (registrationSuccess) return <Navigate to='/' />;

  return (
    <>
      {alertError && <ErrorAlert error={alertError} />}
      {isLoading && <Preloader active={isLoading} />}
      <div className='register'>
        <div className='register__placeholder-column'>
          <img src={placeholder} alt='placeholder' />
        </div>
        <div className='register__form-column'>
          <h1 className='register__form-column__title'>Create Account</h1>
          <div className='register__form-column__subtitle'>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
