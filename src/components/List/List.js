import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import css from './List.module.css'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../Form/FormAddNewTask'
import FormChangeList from '../Form/FormChangeList'

function List(props) {
  const { localTasks, title, type, tasks, addNewTask, setTasks } = props
  const [isFormVisible, setFormVisible] = useState(false)

  const handleClick = () => {
    setFormVisible(!isFormVisible)
  }

  return (
    <div className={css.list}>
      <p className={css.title}>{title}</p>
      <div className={css.tasks}>
        {localTasks.map((task) => {
          return (
            <Link to={`/tasks/${task.id}`} className={css.task_link}>
              <p className={css.tasks_item} key={task.id}>
                {task.title}
              </p>
            </Link>
          )
        })}
        {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <FormAddNewTask
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
          />
        )}
        {type !== LIST_TYPES.BACKLOG && isFormVisible && (
          <FormChangeList
            {...props}
            setFormVisible={setFormVisible}
            handleClick={handleClick}
          />
        )}
        {(type === LIST_TYPES.BACKLOG ||
          type === LIST_TYPES.READY ||
          type === LIST_TYPES.IN_PROGRESS ||
          type === LIST_TYPES.FINISHED) &&
          !isFormVisible && (
            <div className={css.btnBlock}>
              <button className={css.add_card_button} onClick={handleClick}>
                <img src="./images/add-card.png" alt=""></img>
                <span>Add Card</span>
              </button>
            </div>
          )}
      </div>
    </div>
  )
}

export default List
