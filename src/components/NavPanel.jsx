import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoCenter } from '../Foto/NavPanel/LogoCenter.svg';
import { ReactComponent as Cart } from "../Foto/NavPanel/Cart.svg";
import { ReactComponent as Heart } from "../Foto/NavPanel/Heart.svg";
import { ReactComponent as User } from "../Foto/NavPanel/User.svg";
import "../scss/NavPanel.scss"
import { flipInY, rotateOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

  const SvglFlipY = styled.div`animation: 10s ${keyframes`${rotateOut}`} infinite`;
  const SvglFlipInY = styled.div`animation: 10s ${keyframes`${flipInY}`} infinite`; 

const NavPanel = () => {

  return (
    <nav className="nav_panel">
      <div>
        <ul>
          <li><Link to="/">Новинки</Link></li>
          <li><Link to="/">Одежда</Link></li>
          <li><Link to="/">Аксессуары</Link></li>
          <li><Link to="/">SALE</Link></li>
        </ul>
      </div>
      <div>
        <SvglFlipInY><SvglFlipY><LogoCenter /></SvglFlipY></SvglFlipInY>
      </div>
      <div>
        <form>
          <label>
            <input type="text" placeholder="Поиск" />
            <span><RiSearchLine /></span>
          </label>
        </form>
        <Link to="/"><Heart /></Link>
        <Link to="/"><Cart /></Link>
        <Link to="/"><User /></Link>
      </div>
    </nav>
  );
}

export { NavPanel };
