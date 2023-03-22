import React from 'react'
import css from './FormChangeList.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'

function FormChangeList(props) {
  const { title, type, tasks } = props
  return (
    <form>
      <select className={css.selection}></select>
      {tasks.map((task) => {
        return <option>{task.title}</option>
      })}
    </form>
  )
}

export default FormChangeList
