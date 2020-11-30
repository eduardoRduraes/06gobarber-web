import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';


import logoImg from '../../assets/img/logo.svg';

import { Background, Container, Content } from './styles';


interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatorio'),
          email: Yup.string().required('E-mail Obrigatorio').email('Digite um e-mail válido'),
          password: Yup.string().required('Senha invalida'),
        });

        await schema.validate(data, {
          abortEarly: false
        });
        await signIn(
          {
            email: data.email,
            password: data.password,
          }
        );
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
        });

      }
    },
    [signIn, addToast],
  )
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu loguin</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <a href="#">Esqueci minha senha</a>
        </Form>
        <a
          href="#">
          <FiLogIn />
        Criar conta
    </a>
      </Content>
      <Background />
    </Container >
  )
}

export default Signin;
