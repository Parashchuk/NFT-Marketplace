import user from '../assets/img/svg/user.svg';
import email from '../assets/img/svg/envelopeSimple.svg';
import lock from '../assets/img/svg/lockKey.svg';
import placeholder from '../assets/img/placeholders/register_placeholder.png';
import Preloader from '../components/utils/preloader';
import ErrorAlert from '../components/utils/errorAlert';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from '../axios';
import { useState } from 'react';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {error && <ErrorAlert error={error} />}
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
            <div className='register__form-column__input-field'>
              <label htmlFor='username'>
                <img src={user} alt='user' />
              </label>
              <input
                autoComplete='off'
                id='username'
                type='text'
                placeholder='Username'
                {...register('username')}
              />
            </div>
            <div className='register__form-column__input-error'>{errors.username?.message}</div>
            <div className='register__form-column__input-field'>
              <label htmlFor='email'>
                <img src={email} alt='email' />
              </label>
              <input
                autoComplete='off'
                id='email'
                type='text'
                placeholder='Email Address'
                {...register('email')}
              />
            </div>
            <div className='register__form-column__input-error'>{errors.email?.message}</div>
            <div className='register__form-column__input-field'>
              <label htmlFor='password'>
                <img src={lock} alt='lock' />
              </label>
              <input
                autoComplete='off'
                id='password'
                type='password'
                placeholder='Password'
                {...register('password')}
              />
            </div>
            <div className='register__form-column__input-error'>{errors.password?.message}</div>
            <div className='register__form-column__input-field'>
              <label htmlFor='passwordConfirm'>
                <img src={lock} alt='lock' />
              </label>
              <input
                autoComplete='off'
                id='passwordConfirm'
                type='password'
                placeholder='Confirm Password'
                {...register('passwordConfirm')}
              />
            </div>
            <div className='register__form-column__input-error'>
              {errors.passwordConfirm?.message}
            </div>
            <button
              className='register__form-column__input-submit button-template button-tertiary'
              type='submit'>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
