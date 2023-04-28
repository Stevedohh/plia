import * as yup from 'yup';
import { RegisterPayload } from '@plia/plia/types';

export const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const prepareRegisterData = (formData: yup.InferType<typeof schema>): RegisterPayload => {
  return {
    email: formData.email,
    password: formData.password,
    full_name: formData.fullName,
  };
};
