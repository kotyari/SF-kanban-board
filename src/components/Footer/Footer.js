import React from 'react'
import css from './Footer.module.css'
import { useState } from 'react'

function Footer({ tasks }) {
  const [activeTasksValue, setActiveTasksValue] = useState(0)
  const [finishedTasksValue, setFinishedTasksValue] = useState(0)

  const activeTasks = (tasks) => {
    tasks.filter((task) => task.status === 'backlog')
  }

  const finishedTasks = (tasks) => {
    tasks.filter((task) => task.status === 'finished')
  }

  const changeActive = () => {
    activeTasksValue = setActiveTasksValue(activeTasks.length)
  }

  const changeFinished = () => {
    setFinishedTasksValue(finishedTasks.length)
  }

  return (
    <div className={css.footer}>
      <div className={css.tasks_statistics}>
        <p>Active tasks: {} </p>
        <p>Finished tasks: {}</p>
      </div>
      <p>Kanban board by Yaroslav Trapeznikov, 2023</p>
    </div>
  )
}

export default Footer
