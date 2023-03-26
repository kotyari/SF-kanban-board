import React from 'react'
import css from './Menu.module.css'
import menuArrow from '../../images/menu-arrow.png'

function Menu(props) {
  const { menu } = props
  return (
    <div className={menu ? css.menu_hidden : css.menu_active}>
      <img className={css.menu_arrow} src={menuArrow} alt=""></img>
      <ul className={css.menu_ul}>
        <li>Profile</li>
        <li>Log out</li>
      </ul>
    </div>
  )
}

export default Menu
