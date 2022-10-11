import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeLocalStorage } from '../../utils/localStorage';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage('user');
    navigate('/');
  };

  const getUserName = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    return userLocalStorage.name;
  };

  return (
    <nav>
      <div>
        <p data-testid="customer_products__element-navbar-link-products">PRODUTOS</p>
        <p data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</p>
      </div>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { getUserName() }

        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
        >
          SAIR

        </button>
      </div>
    </nav>
  );
}

export default Navbar;
