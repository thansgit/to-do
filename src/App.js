import React, { useState } from 'react'
import Form from './components/Form'
import Section from './components/Section'
import List from './components/List'

const appTitle = "To-Do App";

const list = [
  {id:1, title: "Test #1", completed: false},
  {id:2, title: "Test #2", completed: false},
  {id:3, title: "Test #3", completed: false},
];



function App() {

  const [toDoList, setToDoList] = useState(list);

  const addToDo = (item) => {
    setToDoList((oldList) => [...oldList, item])
  }

  const removeToDo = (id) => {
    setToDoList((oldList)=>oldList.filter((item)=>item.id !== id));
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
        <List removeToDoListProp={removeToDo} list={toDoList} />
      </Section>

    </div>
  )
}

export default App

