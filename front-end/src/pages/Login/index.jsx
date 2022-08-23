import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD, validateEmailRegex, STATUS_OK } from '../../constants';
import login from '../../services/api';
import handleNavigateByUserRole from '../../utils/utils';

function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
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

  const handleLogin = async () => {
    const response = await login(inputState);
    if (response.status === STATUS_OK) {
      setLoginError(false);
      navigate(handleNavigateByUserRole(response.data.role));
    }
    setLoginError(true);
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
          onClick={ handleLogin }
        >
          LOGIN
        </button>
        <button type="button" data-testid="common_login__button-register">
          AINDA NÃO TENHO CONTA
        </button>
      </div>
      {loginError && (
        <div>
          <span data-testid="common_login__element-invalid-email">
            Mensagem escondida
          </span>
        </div>
      )}
    </div>
  );
}

export default Login;
