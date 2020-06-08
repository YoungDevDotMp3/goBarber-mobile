import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button/index';

import logo from '../../assets/logo.png';
import { Container, Title, ForgotPassword, ForgotPasswordText } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Faça seu Logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />
      <Button
        onPress={() => {
          console.log('preu');
        }}
      >
        Entrar
      </Button>

      <ForgotPassword
        onPress={() => {
          console.log('1sd');
        }}
      >
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
    </Container>
  );
};

export default SignIn;
