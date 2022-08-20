import React from 'react';
import InputPassword from '../../components/InputPassword';
import InputText from '../../components/InputText';
import PrimaryButton from '../../components/PrimaryButton';
import TertiaryButton from '../../components/TertiaryButton';

function Login() {
  return (
    <div>
      <div>
        <InputText
          test="common_login__input-email"
          placeholder="E-mail"
        />
        <InputPassword
          test="common_login__input-password"
          placeholder="Senha"
        />
        <PrimaryButton test="common_login__button-login" text="LOGIN" />
        <TertiaryButton
          test="common_login__button-register"
          text="AINDA NÃO TENHO CONTA"
        />
      </div>
      <div>
        <span data-testid="common_login__element-invalid-email">
          Mensagem escondida
        </span>
      </div>
    </div>
  );
}

export default Login;
