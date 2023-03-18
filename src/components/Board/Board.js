import React from 'react'
import List from '../List/List'
import uniqid from 'uniqid'
import css from './Board.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'

function Board(props) {
  const { tasks, setTasks } = props

  const addNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title: title,
      description: null,
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type)
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={listTasks}
            addNewTask={addNewTask}
          />
        )
      })}
    </div>
  )
}

export default Board