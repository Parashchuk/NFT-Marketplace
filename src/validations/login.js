import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useLoginValidator = () => {
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
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(shema),
  });

  return { register, handleSubmit, reset, errors, isValid };
};
