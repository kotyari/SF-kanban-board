import React, { useState } from 'react'
import css from './FormAddNewTask.module.css'

function FormAddNewTask(props) {
  const { addNewTask, setFormVisible } = props
  const [values, setValues] = useState({ title: '' })

  const handleChange = (e) => {
    const fieldName = e.target.name
    setValues({ ...values, [fieldName]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.title) {
      addNewTask(values.title)
    }
    setFormVisible(false)
  }
  return (
    <form className={css.formWrapper} onSubmit={handleSubmit}>
      <div className={css.form}>
        <input
          id="taskTitle"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
        ></input>
      </div>
      <div className={css.btnBlock}>
        <button className={css.submit} type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormAddNewTask
