import React, { useState } from 'react';
import {
  MIN_LENGTH_PASSWORD, MIN_LENGTH_NAME, validateEmailRegex } from '../../constants';

function Register() {
  const [registerError] = useState(false);
  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeNameInput = ({ target }) => {
    setInputState({
      name: target.value,
      email: inputState.email,
      password: inputState.password,
    });
  };

  const onChangeEmailInput = ({ target }) => {
    setInputState({
      name: inputState.name,
      email: target.value,
      password: inputState.password,
    });
  };

  const onChangePasswordInput = ({ target }) => {
    setInputState({
      name: inputState.name,
      email: inputState.email,
      password: target.value,
    });
  };

  const validateNameInput = inputState.name.length < MIN_LENGTH_NAME;
  const validateEmailInput = inputState.email.match(validateEmailRegex);
  const validatePasswordInput = inputState.password.length < MIN_LENGTH_PASSWORD;

  return (
    <div>
      <div className="login-form">
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Nome"
          onChange={ onChangeNameInput }
        />
        <input
          type="text"
          data-testid="common_register__input-email"
          placeholder="E-mail"
          onChange={ onChangeEmailInput }
        />
        <input
          type="password"
          data-testid="common_register__input-password"
          placeholder="Senha"
          onChange={ onChangePasswordInput }
        />
        {registerError && (
          <span data-testid="common_register__element-invalid_register">
            ❗Usuário já existe
          </span>
        )}
        <button
          className="primary-button"
          type="button"
          data-testid="common_register__button-register"
          disabled={ !validateEmailInput || validatePasswordInput || validateNameInput }
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}

export default Register;
