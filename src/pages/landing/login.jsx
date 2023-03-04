import AlertTemplate from '../../components/utils/alertTemplate';
import Preloader from '../../components/utils/preloader';
import email from '../../assets/img/svg/email.svg';
import password from '../../assets/img/svg/lock.svg';
import eye from '../../assets/img/svg/eye.svg';
import eyeSlash from '../../assets/img/svg/eyeSlash.svg';
import backgroundShape from '../../assets/img/svg/backgroundShape1.svg';
import AuthHeader from '../../components/landing/authHeader';

import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from '../../axios';
import * as yup from 'yup';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [visiblePassword, setVisiblePassword] = useState(false);

  //Create validations to login form
  const shema = yup.object().shape({
    email: yup.string().email('Enter a valid Email').required("Email can't be blank"),
    password: yup
      .string()
      .min(4, 'Password must have at least 4 symbols')
      .max(20, "Password can't be more then 20 symbols")
      .required("Password can't be blank"),
  });

  //Create instance of valitator to conncect to form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    //Reset error state
    setError(null);

    setIsLoading(true);
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((res) => {
        setRegistrationSuccess(true);
        window.localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        reset({ password: '' });
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (registrationSuccess) return <Navigate to='/profile' />;
  if (isLoading) return <Preloader active={isLoading} />;
  return (
    <>
      <AlertTemplate
        type='error'
        title='Unsuccessful Authorisation'
        text={error}
        setter={setError}
      />

      <div style={{ backgroundImage: `url(${backgroundShape})` }} className='login'>
        <AuthHeader />
        <div className='login__container'>
          <div className='login__title'>Welcome Back</div>
          <div className='login__subtitle'>Enter your email and password manually</div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <button className='login__button button-template button-tertiary' type='submit'>
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
