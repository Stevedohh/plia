import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
});
