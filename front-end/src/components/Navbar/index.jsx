import React from 'react';

function Navbar() {
  return (
    <nav>
      <div>
        <p data-testid="customer_products__element-navbar-link-products">PRODUTOS</p>
        <p data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</p>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">USUÁRIO</p>
        <p data-testid="customer_products__element-navbar-link-logout">SAIR</p>
      </div>
    </nav>
  );
}

export default Navbar;
