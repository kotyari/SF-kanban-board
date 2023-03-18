import React from 'react'
import { useMatch } from 'react-router-dom'
import css from './TaskDetail.module.css'
import cancel from '../../images/cancel.png'

function TaskDetail(props) {
  const match = useMatch()
  const { taskId } = match.params
  const { tasks } = props

  const task = tasks.find((task) => task.id === taskId)
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>{task.title}</h1>
        <button className={css.close_button}>
          <img src={cancel} alt="X"></img>
        </button>
      </div>
      <p className={css.text_about}>{task.description}</p>
    </div>
  )
}

export default TaskDetail
