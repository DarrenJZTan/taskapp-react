import "./Form.css";
import React, { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import FormDate from "../FormDate/FormDate";
import FormTextArea from "../FormTextArea/FormTextArea";
import FormButtons from "../FormButtons/FormButtons";

const Form = ({ setTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("Choose Status");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
    // if (FormInput.isValid)
    //Check all is valid
    
    //add current task to tasks state

    //reset form field state
  }

  return (
    <div>
      <div className="container-fluid w-75 bg-secondary px-3 task-form">
        <div className="row">
          <div className="col text-end">
            <img src="resources/plus.svg" className="plus-icon" />
          </div>
        </div>
        <form id="form-validate" novalidation className="display-none" onSubmit={handleSubmit}>
          <div className="row">
            <FormInput
              placeholder="Enter Task"
              label="task-name"
              inputType="text"
              title="Task Name"
              value={taskName}
              setState={setTaskName}
              
            />
            <FormInput
              placeholder="Enter Name"
              label="assigned"
              inputType="text"
              title="Assigned To"
              value={assignedTo}
              setState={setAssignedTo}
            />
          </div>
          <div className="row">
            <FormSelect
              label="Status"
              title="Status"
              
              value={status}
              setState={setStatus}
            />
            <FormDate
              label="date"
              inputType="date"
              title="Due Date"
              
              value={dueDate}
              setState={setDueDate}
            />
          </div>
          <div className="row">
            <FormTextArea
              placeholder="Task Description"
              label="description"
              title="Description"
              
              value={description}
              setState={setDescription}
            />
          </div>

          <div className="row mt-3">
            <div className="col text-end">
              <FormButtons
                text="Clear"
                type="reset"
                className="btn btn-danger px-5 rounded-pill fw-bold"
              />
            </div>
            <div className="col">
              <FormButtons
                text="Add"
                type="submit"
                className="btn btn-success px-5 rounded-pill fw-bold"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
