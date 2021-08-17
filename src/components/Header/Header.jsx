import React from "react";
import { Link } from "react-router-dom";
import {HeaderStyled} from './Header.styled'

const Header = () => {
  return (
    <HeaderStyled>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
