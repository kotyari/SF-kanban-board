import React from 'react'
import css from './Header.module.css'
import userAvatar from '../../images/user-avatar.png'
import arrowDown from '../../images/arrow-down.png'
import arrowUp from '../../images/arrow-up.png'

function Header() {
  return (
    <div className={css.header}>
      <h1>Awesome Kanban Board</h1>
      <div className={css.user_menu}>
        <img
          className={css.user_menu__avatar}
          src={userAvatar}
          alt="user avatar"
        ></img>
        <img src={arrowDown} alt="open"></img>
      </div>
    </div>
  )
}

export default Header
