import React from 'react'
import css from './FormChangeList.module.css'

import { useState } from 'react'

function FormChangeList(props, event) {
  const { type, tasks, setTasks, handleClick } = props
  const [values, setValues] = useState('')

  const changeSelect = (event) => {
    event.preventDefault()

    const updatedTasks = tasks.map((task) => ({
      ...task,
      status:
        task.title === values && task.status === 'backlog'
          ? 'ready'
          : task.title === values && task.status === 'ready'
          ? 'inProgress'
          : task.title === values && task.status === 'inProgress'
          ? 'finished'
          : task.status,
    }))

    setTasks(updatedTasks)
    handleClick()
  }

  if (type === 'ready') {
    return (
      <form className={css.form}>
        <select
          className={css.selection}
          onClick={(e) => setValues(e.target.value)}
        >
          <option selected defaultValue={' '}></option>
          {tasks.map((task) => {
            if (task.status === 'backlog') {
              return <option value={task.title}>{task.title}</option>
            } else return ''
          })}
        </select>
        <button className={css.submit_btn} onClick={changeSelect}>
          Submit
        </button>
        <button className={css.hide_btn} onClick={handleClick}>
          Hide
        </button>
      </form>
    )
  } else if (type === 'inProgress') {
    return (
      <form>
        <select
          className={css.selection}
          onClick={(e) => setValues(e.target.value)}
        >
          <option selected defaultValue={' '}></option>
          {tasks.map((task) => {
            if (task.status === 'ready') {
              return <option>{task.title}</option>
            } else return ''
          })}
        </select>
        <button className={css.submit_btn} onClick={changeSelect}>
          Submit
        </button>
        <button className={css.hide_btn} onClick={handleClick}>
          Hide
        </button>
      </form>
    )
  } else if (type === 'finished') {
    return (
      <form>
        <select
          className={css.selection}
          onClick={(e) => setValues(e.target.value)}
        >
          <option selected defaultValue={' '}></option>
          {tasks.map((task) => {
            if (task.status === 'inProgress') {
              return <option>{task.title}</option>
            } else return ''
          })}
        </select>
        <button className={css.submit_btn} onClick={changeSelect}>
          Submit
        </button>
        <button className={css.hide_btn} onClick={handleClick}>
          Hide
        </button>
      </form>
    )
  }
}

export default FormChangeList
