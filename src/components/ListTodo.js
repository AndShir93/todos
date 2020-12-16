import React, {useContext, useState} from 'react';
import Context from '../context';

function addClass(s){
    if(s.completed){
       return 'list-todo__item_done';
    }
}

function ListTodo(props){
    const [listTodos, setListTodos] = useState([
        {days: 'Понедельник', items:[{id:1, title:'Task 1'},{id:2, title:'Task 2'},{id:3, title:'Task 3'}]},
        {days: 'Вторник', items:[{id:4, title:'Task 4'},{id:5, title:'Task 5'},{id:6, title:'Task 6'}]},
        {days: 'Среда', items:[{id:7, title:'Task 7'},{id:8, title:'Task 8'},{id:9, title:'Task 9'}]}
    ])
    const { removeTodo } = useContext(Context);
    localStorage.setItem('todo', JSON.stringify(props.list))
    return(
            <div>
                <ol className="list-todo">
                    {props.list.map((todo) => {
                        return (
                            <div key={todo.id} className="list-todo__item">                            
                                <li className={addClass(todo)}><input type="checkbox" checked={todo.completed} onChange={() => props.change(todo.id)}/>{todo.title}</li>
                                <button onClick={()=> removeTodo(todo.id)}>&times;</button>
                            </div>
                            )
                    })}
                </ol>
            </div>
    )
}

export default ListTodo;