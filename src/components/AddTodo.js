import React, { useState } from 'react'

function AddTodo(props){
    const [value, setValue] = useState('')
    function submitHandler(e){
        e.preventDefault()
        if(value.trim()){
            props.onCreate(value, props.id)
            setValue('')
        }
    }
    return(
        <form className="add-todo" onSubmit={submitHandler}>
            <input className="add-todo__value" type="text" value={value} onChange = {e => setValue(e.target.value)} />
            <input className="add-todo__submit" type="submit" value='+'/>
        </form>
    )
}

export default AddTodo;