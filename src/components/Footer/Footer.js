import React from 'react'
import css from './Footer.module.css'
import { useState, useEffect } from 'react'

function Footer({ tasks }) {
  const [activeTasksValue, setActiveTasksValue] = useState(0)
  const [finishedTasksValue, setFinishedTasksValue] = useState(0)

  const activeTasks = tasks.filter((task) => task.status === 'backlog')

  const finishedTasks = tasks.filter((task) => task.status === 'finished')

  const changeState = (tasks) => {
    setActiveTasksValue(activeTasks.length)
    setFinishedTasksValue(finishedTasks.length)
  }

  useEffect(() => {
    changeState()
  }, [tasks])

  return (
    <div className={css.footer}>
      <div className={css.tasks_statistics}>
        <p>Active tasks: {activeTasksValue} </p>
        <p>Finished tasks: {finishedTasksValue}</p>
      </div>
      <p>Kanban board by Yaroslav Trapeznikov, 2023</p>
    </div>
  )
}

export default Footer
