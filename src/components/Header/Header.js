import React from 'react'
import css from './Header.module.css'
import userAvatar from '../../images/user-avatar.png'
import arrowDown from '../../images/arrow-down.png'
import arrowUp from '../../images/arrow-up.png'
import Menu from '../Menu/Menu'
import { useState } from 'react'

function Header() {
  const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={css.header}>
      <h1>Awesome Kanban Board</h1>
      <div className={css.user_menu} onClick={handleMenu}>
        <img
          className={css.user_menu__avatar}
          src={userAvatar}
          alt="user avatar"
        ></img>
        {menu === true ? (
          <img src={arrowDown} alt="open"></img>
        ) : (
          <img src={arrowUp} alt="close"></img>
        )}

        <Menu menu={menu} />
      </div>
    </div>
  )
}

export default Header
