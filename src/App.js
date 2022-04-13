import React, { useState, useEffect } from 'react'
import todos from './apis';

import Form from './components/Form'
import Section from './components/Section'
import List from './components/List'

const appTitle = "To-Do App";


function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
   async function fetchToDos(){
     const { data } = await todos.get('/todos');
     setToDoList(data);
   }
   fetchToDos();
  },[])

  const addToDo = async (item) => {
    const { data } = await todos.post('/todos', item)
    setToDoList((oldList) => [...oldList, data])
  }

  const removeToDo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setToDoList((oldList)=>oldList.filter((item)=>item._id !== id));
  }

  const updateToDo = async (id, item) => {
    await todos.put(`/todos/${id}`, item)
  }

  return (
    <div className="ui container center aligned">

      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addToDo={addToDo}/>
      </Section>

      <Section>
        <List
        updateToDoListProp={updateToDo} 
        removeToDoListProp={removeToDo} 
        list={toDoList} 
        />
      </Section>

    </div>
  )
}

export default App

