import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Board from '../Board/Board'
import css from './Main.module.css'
import TaskDetail from '../TaskDetail/TaskDetail'
import uniqid from 'uniqid'

function Main(props) {
  return (
    <main className={css.main}>
      <Routes>
        <Route key={uniqid()} exact path={`/`} element={<Board {...props} />} />
        <Route path={`/tasks/:taskId}`} element={<TaskDetail {...props} />} />
      </Routes>
    </main>
  )
}

export default Main
