import React from 'react';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';


import logoImg from '../../assets/img/logo.svg';

import { Background, Container, Content } from './styles';

// import { Container } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
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
