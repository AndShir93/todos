import React, {useState} from 'react';
import AddTodo from './AddTodo'

function ListTodo(){
    let [listTodos, setListTodos] = useState(localStorage.todos ? JSON.parse(localStorage.todos) : [
        {days: 'Понедельник',idDay: 1, items:[]},
        {days: 'Вторник',idDay: 2, items:[]},
        {days: 'Среда',idDay: 3, items:[]},
        {days: 'Четверг',idDay: 4, items:[]},
        {days: 'Пятница',idDay: 5, items:[]},
        {days: 'Суббота',idDay: 6, items:[]},
        {days: 'Воскресенье',idDay: 7, items:[]}
    ])
    function addTodo(title, i){
        setListTodos(
            listTodos = listTodos.map(todo => {
                if(i===todo.idDay){
                    todo.items.push({id: new Date(), title})
                }
                localStorage.setItem('todos', JSON.stringify(listTodos))
                return todo
            })
        );
    }
    return(
        <div className="week">
            {listTodos.map( weekDay => 
            <div key={weekDay.idDay} className="week__todos">
                <div className="week__day">{weekDay.days}</div>
                {weekDay.items.length ?( weekDay.items.map( todo =>
                    <div key={todo.id} className="week__todo">{todo.title}</div>
                )):<p>Add todo ...</p>}                
                <AddTodo id={weekDay.idDay} onCreate = {addTodo} />
            </div>
            )}
        </div>
    )
}

export default ListTodo;