import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoBeerOutline } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { removeLocalStorage } from '../../utils/localStorage';
import './style.scss';

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
    <nav className="navbar">
      <button
        className="nav-item"
        type="button"
        onClick={ () => navigate('/customer/products') }
      >
        <IoBeerOutline size="2em" color="white" />
        Produtos
      </button>
      <button
        className="nav-item"
        type="button"
        onClick={ () => navigate('/customer/orders') }
      >
        <BsCartCheck size="2em" color="white" />
        Meus Pedidos
      </button>
      <button
        className="nav-item"
        type="button"
      >
        <FaRegUserCircle size="2em" color="white" />
        { getUserName() }
      </button>
      <button
        className="nav-item"
        type="button"
        onClick={ handleLogout }
      >
        <MdLogout size="2em" color="white" />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
