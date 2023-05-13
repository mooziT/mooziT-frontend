import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlHeart,SlHome } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { MenuWrapper, MenuList } from './Menu.styles';

const Menu = ({ page }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <MenuWrapper>
      <MenuList>
        <li onClick={() => handleClick('/select')} onKeyUp={() => handleClick('/select')}>
          <SlHeart size={22} color={page === 'select' ? '#006FFD' : '#FFFFFF' } />
          
        </li>
        <li onClick={() => handleClick('/post')} onKeyUp={() => handleClick('/post')}>
          <SlHome size={22} color={page === 'post' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
        <li onClick={() => handleClick('/user')} onKeyUp={() => handleClick('/user')}>
          <RxPerson size={22} color={page === 'user' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;