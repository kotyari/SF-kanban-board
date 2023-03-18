import React from 'react'
import css from './Footer.module.css'

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.tasks_statistics}>
        <p>Active tasks: N </p>
        <p>Finished tasks: M</p>
      </div>
      <p>Kanban board by Yaroslav Trapeznikov, 2023</p>
    </div>
  )
}

export default Footer
