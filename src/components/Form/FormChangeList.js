import React from 'react'
import css from './FormChangeList.module.css'

function FormChangeList() {
  return (
    <form>
      <select className={css.selection}>
        <option>Пункт 1</option>
        <option>Пункт 2</option>
      </select>
    </form>
  )
}

export default FormChangeList
