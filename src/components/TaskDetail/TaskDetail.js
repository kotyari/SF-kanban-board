import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import css from './TaskDetail.module.css'
import cancel from '../../images/cancel.png'

function TaskDetail(props) {
  const { id } = useParams()
  const { tasks, setTasks } = props
  const task = tasks.find((task) => task.id === id)
  const [descValue, setDescValue] = useState(task.description)
  const [inputReveal, setInputReveal] = useState(false)

  const handleForm = () => {
    setInputReveal(!inputReveal)
  }

  const changeDesc = (e) => {
    e.preventDefault()
    const updatedDescTasks = tasks.map((task) => ({
      ...task,
      description: task.id === id ? descValue : task.description,
    }))

    setTasks(updatedDescTasks)
    handleForm()
  }

  const hideForm = (e) => {
    e.preventDefault()
    handleForm()
    setDescValue(task.description)
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
      <p className={inputReveal ? css.hide : css.text_about}>
        {task.description || ' This task has no description '}
      </p>
      <form className={inputReveal ? css.desc_form : css.hide}>
        <textarea
          onChange={(e) => setDescValue(e.target.value)}
          type="text"
          className={css.change_desc}
          value={descValue || ' This task has no description '}
        ></textarea>
        <div className={css.btn_wrapper}>
          <button className={css.form_btn} onClick={changeDesc}>
            Save
          </button>
          <button className={css.form_btn_cancel} onClick={hideForm}>
            Cancel
          </button>
        </div>
      </form>
      <button
        onClick={handleForm}
        className={inputReveal ? css.hide : css.open_form_btn}
      >
        Change description
      </button>
    </div>
  )
}

export default TaskDetail
