import React from 'react'
import { useParams, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'
import cancel from '../../images/cancel.png'

function TaskDetail(props) {
  const { id } = useParams()
  const { tasks } = props

  const task = tasks.find((task) => task.id === id)
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>{task.title}</h1>
        <Link exact to={`/`}>
          <button className={css.close_button}>
            <img src={cancel} alt="Cancel"></img>
          </button>
        </Link>
      </div>
      <p className={css.text_about}>{task.description || ' No description '}</p>
    </div>
  )
}

export default TaskDetail
