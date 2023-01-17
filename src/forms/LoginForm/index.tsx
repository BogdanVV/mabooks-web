import { FormTextInput } from '@/components';
import { useAppContext } from '@/context/App/AppProvider';
import { useAuthContext } from '@/context/Auth/AuthProvider';
import { LoginFormValues } from '@/types';
import { User } from '@/types/backend';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormContainer, FormHeader, SubmitButton } from './styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<LoginFormValues>({
    // TODO: remove hard-coded default values eventually
    defaultValues: { email: 'marfei@ukr.net', password: 'qweqwe' },
  });
  const { http, closeModal } = useAppContext();
  const { setAccessToken, setIsAuthenticated, setCurrentUser } =
    useAuthContext();

  console.log('errors>>>', errors);

  const onSubmit: SubmitHandler<LoginFormValues> = async (loginData) => {
    clearErrors();

    try {
      const { data } = await http.post<User>('/auth/login', loginData);

      if (typeof window != undefined) {
        localStorage.setItem('accessToken', data.accessToken);
      }

      setIsAuthenticated(true);
      setCurrentUser(data);
      setAccessToken(data.accessToken);
      closeModal();
    } catch (err) {
      console.log('error', err);

      if (err instanceof AxiosError) {
        if (err.response?.status === 404) {
          setError('email', {
            type: 'custom',
            message: 'User with this email does not exist',
          });
        }
        if (err.response?.status === 400) {
          setError('password', {
            type: 'custom',
            message: 'This password is invalid',
          });
        }
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Login</FormHeader>
      <FormTextInput
        register={register}
        label='Email'
        required
        name='email'
        type='email'
        error={errors.email}
      />
      <FormTextInput
        register={register}
        name='password'
        label='Password'
        required
        type='password'
        error={errors.password}
      />
      <SubmitButton type='submit'>Login</SubmitButton>
    </FormContainer>
  );
};
