import react, { useState } from 'react';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList'
function App() {
  const [tasks, setTasks] = useState([]);


  
  return (
    <div className="App">
      <h1 className="text-center my-4 display-2">Task App</h1>
      <Form setTasks={setTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
