import React, { useState, useNavigate } from "react";
import { MIN_LENGTH_PASSWORD, validateEmailRegex } from "../../constants";
import login from "../../services/api";
import handleNavigateByUserRole from "../../utils/utils";

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
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
    const user = await login(inputState);
    if (user) {
      setLoginError(false);
      handleNavigateByUserRole(user.role);
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
          disabled={!validateEmailInput || validatePasswordInput}
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
