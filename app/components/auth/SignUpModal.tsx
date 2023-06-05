import React from 'react';
import Button from '../form/Button';
import Modal from '../common/modal/Modal';
import { useForm } from 'react-hook-form';
import InputError from '../form/InputError';
import { SignUpForm } from '@/app/interfaces/auth';
import ModalTitle from '../common/modal/ModalTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from '../form/InputGroup/InputGroup';
import { TextField } from '../form/TextField/TextField';
import { SignUpSchema } from '@/app/schema/auth/SignUpSchema';
import PasswordField from '../form/PasswordField/PasswordField';

interface SignUpModalProps {
  show: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ show, onClose }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(SignUpSchema),
  })

  const onSubmitSignUp = (values: SignUpForm) => {
    console.log('values', values);
  }


  return (
    <Modal show={show} onClose={onClose}>
      <ModalTitle>Register your account</ModalTitle>
      <form onSubmit={handleSubmit(onSubmitSignUp)}>
        <div className="flex flex-col gap-4">
          <InputGroup label="Nick name" htmlFor="username">
            <TextField
              id="username"
              placeholder="Jhon Due"
              hasError={!!errors.username?.message}
              {...register('username')}
            />
            <InputError error={errors.username?.message} />
          </InputGroup>
          <InputGroup label="Email" htmlFor="email">
            <TextField
              id="email"
              placeholder="example@example.com"
              hasError={!!errors.email?.message}
              {...register('email')}
            />
            <InputError error={errors.email?.message} />
          </InputGroup>
          <InputGroup label="Password" htmlFor="password">
            <PasswordField
              id="password"
              type="password"
              hasError={!!errors.password?.message}
              placeholder="hFg4093%67%m"
              {...register('password')}
            />
            <InputError error={errors.password?.message} />
          </InputGroup>
        </div>
        <Button type="submit" className="font-bold w-full mt-6 bg-secundary">
          Register
        </Button>
        <button className="border-[2px] border-black-opacity-10 rounded-full px-6 py-2 w-full mt-4 font-bold flex gap-3 items-center justify-center">
          <img
            src="images/icons/google.svg"
            alt="google icon"
            className="w-5 h-5"
          />
          <p>Sign up with Google</p>
        </button>
        <p className="text-sm mt-8 text-center">
          Have an account? <a href="/" className="text-secundary">Sign In</a>
        </p>
      </form>
    </Modal>
  );
}

export default SignUpModal;