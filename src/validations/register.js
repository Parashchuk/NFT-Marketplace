import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

//Create chema validation for register form

export const useRegisterValidator = () => {
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

  //Create instance of validation to connect to register form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(shcema),
  });
  return { register, handleSubmit, setError, errors, isValid };
};
