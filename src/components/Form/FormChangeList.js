import React from 'react'
import css from './FormChangeList.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'
import { useState } from 'react'

function FormChangeList(props) {
  const { title, type, tasks } = props
  const [taskType, setTaskType] = useState('backlog')

  const changeType = (tasks) => {
    tasks.map((task) => {
      if (task.status === 'backlog') {
        task.status = taskType
        setTaskType('ready')
      }
    })
  }

  if (type === 'ready') {
    return (
      <form>
        <select className={css.selection}>
          {tasks.map((task) => {
            if (task.status === 'backlog') {
              return <option>{task.title}</option>
            }
          })}
        </select>
        <button onClick="changeType">click</button>
      </form>
    )
  } else if (type === 'inProgress') {
    return (
      <form>
        <select className={css.selection}>
          {tasks.map((task) => {
            if (task.status === 'ready') {
              return <option>{task.title}</option>
            }
          })}
        </select>
        <button>submit</button>
      </form>
    )
  } else if (type === 'finished') {
    return (
      <form>
        <select className={css.selection}>
          {tasks.map((task) => {
            if (task.status === 'inProgress') {
              return <option>{task.title}</option>
            }
          })}
        </select>
        <button>submit</button>
      </form>
    )
  }
}

export default FormChangeList
