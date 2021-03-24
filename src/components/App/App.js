import react, { useState } from 'react';
import Form from '../Form/Form';

function App() {
  const [tasks, setTasks] = useState({});


  
  return (
    <div className="App">
      <h1 className="text-center my-4 display-2">Task App</h1>
      <Form setTasks={setTasks}/>
    </div>
  );
}

export default App;
