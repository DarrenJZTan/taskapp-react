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
  const [taskNameValidation, setTaskNameValidation] = useState(false);
  const [assignedToValidation, setAssignedToValidation] = useState(false);
  const [statusValidation, setStatusValidation] = useState(false);
  const [dueDateValidation, setDueDateValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
    // if (FormInput.isValid)
    //Check all is valid
    if(!taskNameValidation && !assignedToValidation && !statusValidation && !dueDateValidation && !descriptionValidation) {
      return
      
    } else {
      setTasks((prev)=> [...prev, {taskName: taskName, assignedTo: assignedTo, status: status, dueDate: dueDate, description: description}]
      );
      setTaskName("");
      setAssignedTo("");
      setStatus("Choose Status");
      setDueDate("");
      setDescription("");
      setTaskNameValidation(false);
      setAssignedToValidation(false);
      setStatusValidation(false);
      setDueDateValidation(false);
      setDescriptionValidation(false);
    }
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
              setValidation={setTaskNameValidation}
              
            />
            <FormInput
              placeholder="Enter Name"
              label="assigned"
              inputType="text"
              title="Assigned To"
              value={assignedTo}
              setState={setAssignedTo}
              setValidation={setAssignedToValidation}
            />
          </div>
          <div className="row">
            <FormSelect
              label="Status"
              title="Status"
              setValidation={setStatusValidation}
              value={status}
              setState={setStatus}
            />
            <FormDate
              label="date"
              inputType="date"
              title="Due Date"
              setValidation={setDueDateValidation}
              value={dueDate}
              setState={setDueDate}
            />
          </div>
          <div className="row">
            <FormTextArea
              placeholder="Task Description"
              label="description"
              title="Description"
              setValidation={setDescriptionValidation}
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
