import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'
import cancel from '../../images/cancel.png'

function TaskDetail(props) {
  const { id } = useParams()
  const { tasks, setTasks } = props
  const task = tasks.find((task) => task.id === id)
  //const [inputReveal, setInputReveal] = useState(false)
  const [descValues, setDescValues] = useState('')
  const [itemDescription, setItemDescription] = useState(task.description)

  const handleChange = (e) => {
    setDescValues(e.target.value)
  }

  const changeDesc = (e) => {
    e.preventDefault()

    setItemDescription(descValues)
  }

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>{task.title}</h1>
        <Link to={`/`}>
          <button className={css.close_button}>
            <img src={cancel} alt="Cancel"></img>
          </button>
        </Link>
      </div>
      <p className={css.text_about}>
        {task.description || ' This task has no description '}
      </p>
      <form onChange={(e) => setDescValues(e.target.value)}>
        <input
          type="text"
          className={css.change_desc}
          //value={itemDescription || ' This task has no description '}
        ></input>
        <button>Change</button>
      </form>
    </div>
  )
}

export default TaskDetail
