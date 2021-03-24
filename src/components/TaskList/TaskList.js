import React from 'react'

const TaskList = ( {tasks} ) => {

  console.log(tasks)
  const foo = tasks.map((task) => task.taskName)
  console.log(foo)


  return (
    <div className="container-fluid mt-5 w-75">
      {tasks.map((task, index) => {
        return(
          <>
            <div className="col-10">
              <h2 className="card-title mb-3 display-4 fw-bold">{task.taskName}</h2>
              <p className="card-text">{task.description}</p>
              <h6 className="card-subtitle pb-3 fw-bold">Assigned To: <span className="card-text notbold">{task.assignedTo}</span></h6>
              <h6 className="card-subtitle pb-3 fw-bold">Due Date: <span className="card-text notbold">{task.dueDate}</span></h6>
              <h6 className="card-subtitle pb-3 fw-bold">Status: <span className="card-text notbold">{task.status}</span></h6>
            </div>
            <div className="col">
              <div className="row">
                <div className="col text-end">
                  <button className="btn-close btn-close delete-btn"></button>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default TaskList
