import React, { useState } from 'react';
import { MIN_LENGTH_PASSWORD, validateEmailRegex } from '../../constants';

function Login() {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const onChangeEmailInput = ({ target }) => {
    setInputState({
      email: target.value,
      password: inputState.password,
    });
  };

  const onChangePasswordInput = ({ target }) => {
    setInputState({
      email: inputState.email,
      password: target.value,
    });
  };

  const validateEmailInput = inputState.email.match(validateEmailRegex);
  const validatePasswordInput = inputState.password.length < MIN_LENGTH_PASSWORD;

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="common_login__input-email"
          placeholder="E-mail"
          onChange={ onChangeEmailInput }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          onChange={ onChangePasswordInput }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !validateEmailInput || validatePasswordInput }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          AINDA NÃO TENHO CONTA
        </button>
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
