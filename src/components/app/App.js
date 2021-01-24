import React from 'react';
import './App.css';
import Person from '../person/Person'
import AddForm from '../addPerson/AddPerson'


function App() {
  const [persons, setPerson] = React.useState([
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ]
  );
  const [showPerson,setShowPerson] = React.useState(true)
  const [showForm,setShow] = React.useState(false)

  const togglePersonsHandler = () =>{
    setShowPerson(!showPerson)
  }

  const onNameChangeHandler = (event,id) =>{
    const personIndex = persons.findIndex(p => {
      return p.id === id
    })
    const person = {...persons[personIndex]}
    person.name = event.target.value;

    const personsCopy = [...persons]
    personsCopy[personIndex] = person;
    setPerson(personsCopy)
  }

  const deleteHandler = (personIndex) =>{
    const personsCopy = [...persons]
    personsCopy.splice(personIndex,1)
    setPerson(personsCopy)
  }
  const addPersonHandler = (person) => {
    const personsCopy = [...persons]
    personsCopy.push(person);
    setPerson([...personsCopy]);
    setShow(false)
  }
  const showFormHandler = ()=> {
    setShow(true)
  }

  const formCloseClickHandler = ()=>{
    setShow(false)
  }

  let personList = null
  if(showPerson){
    personList = (persons.map((person,index) =>{
      return <Person 
      name={person.name}
      age={person.age} 
      key={person.id}
      changed = {(e)=> onNameChangeHandler(e,person.id)}
      deleted = {()=> deleteHandler(index)}
      />
    }))
  }

  return (
    <div className="app">
      <h1 className="app__heading">Simple Todo React App</h1>
      <h1 className="app__version">React version : {React.version}</h1>
      <button className="app__person-toggle-btn" onClick={togglePersonsHandler}>Toggle Persons</button>
      <button className="app__person-add-btn" onClick={showFormHandler}>Add Person</button>
      {showForm? <AddForm addPersonHandler={addPersonHandler} formCloseClickHandler={formCloseClickHandler} /> : null}
      <hr />
      <div className="app__persons-box">
      {personList}
      </div>
    </div>
  );
}

export default App;
