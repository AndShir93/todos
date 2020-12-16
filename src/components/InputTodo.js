import React, { useState } from 'react'

function InputTodo({onCreate}){
    const [value, setValue] = useState('')
    function submitHandler(e){
        e.preventDefault();

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return(
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" value={value} onChange = {e => setValue(e.target.value)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
    )
}

export default InputTodo;