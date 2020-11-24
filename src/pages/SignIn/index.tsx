import React from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';


import logoImg from '../../assets/img/logo.svg';

import { Background, Container, Content } from './styles';


const Signin: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <Form onSubmit={handleSubmit}>
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
