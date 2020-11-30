import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';


import logoImg from '../../assets/img/logo.svg';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatorio'),
          email: Yup.string().required('E-mail Obrigatorio').email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitps'),
        });

        await schema.validate(data, {
          abortEarly: false
        });

      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
        console.log(error);
      }
    },
    [],
  )
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a
          href="#">
          <FiArrowLeft />
          Voltar para Login
      </a>
      </Content>
    </Container >
  )
}

export default SignUp;
