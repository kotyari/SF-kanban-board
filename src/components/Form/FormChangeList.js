import React from 'react'
import css from './FormChangeList.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'

function FormChangeList(props) {
  const { title, type, tasks, addNewTask } = props
  return (
    <form>
      <select className={css.selection}>
        {tasks.map((task) => {
          return <option>{task.title}</option>
        })}
      </select>
    </form>
  )
}

export default FormChangeList
