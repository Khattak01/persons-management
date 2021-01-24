import React from 'react'
import './AddPerson.css'

const AddPerson = props => {

    const [person,setPerson] = React.useState({name:'',age:''});


    const getRandomId = () =>{
        return Math.random().toString(36).substring(7);
    } 

    const onInputNameChangeHandler = (e)=>{
        const personTemp = {...person};
        personTemp.name = e.target.value;
        setPerson(personTemp)
    }
    const onInputAgeChangeHandler = (e)=>{
        const personTemp = {...person};
        personTemp.age = e.target.value;
        setPerson(personTemp) 
    }

    const getPerson = () =>{
        const personObj = {}
        personObj.id = getRandomId();
        personObj.name = person.name
        personObj.age = person.age        
        // setPerson({...personObj})
        console.log("PERSONOBJ : ",personObj)
        console.log("PERSON : ",person)
        return personObj
    }

    // let r = Math.random().toString(36).substring(7);
    // console.log( r);
    // let addBtn = null;
    // if(!person.name || !person.age)
    //     addBtn = <button disabled className="form__btn-add" onClick={()=>props.addPersonHandler(getPerson())}>Add</button>
    // else
    //     addBtn = <button className="form__btn-add" onClick={()=>props.addPersonHandler(getPerson())}>Add</button>
    return (
        <div className="form-box">
            <div className="form">
                <input type="text" className="form__input"  onChange={onInputNameChangeHandler} placeholder="Enter Name : "/>
                <input type="text" className="form__input"  onChange={onInputAgeChangeHandler} placeholder="Enter Age : "/>
                {/* {addBtn} */}
                <button className="form__btn-add" disabled={person.name.length<1 || person.age.length<1} onClick={()=>props.addPersonHandler(getPerson())}>Add</button>
                <button className="form__btn-delete" onClick={props.formCloseClickHandler}>CLOSE</button>
            </div>
        </div>
    )
}

export default AddPerson
