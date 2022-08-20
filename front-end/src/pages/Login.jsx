import React from 'react';

function Login() {
  return (
    <div>
      <div>
        <input data-testid="common_login__input-email" type="text" />
        <input data-testid="common_login__input-password" type="password" />
        <button data-testid="common_login__button-login" type="button">
          LOGIN
        </button>
        <button data-testid="common_login__button-register" type="button">
          AINDA NÃO TENHO CONTA
        </button>
      </div>
      <div>
        <span data-testid="common_login__element-invalid-email">Mensagem escondida</span>
      </div>
    </div>
  );
}

export default Login;
