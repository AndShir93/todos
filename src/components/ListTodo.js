import React, {useState} from 'react';
import AddTodo from './AddTodo'

function ListTodo(){
    let [listTodos, setListTodos] = useState([
        {days: 'Понедельник',idDay: 1, items:[{id:1, title:'Task 1'},{id:2, title:'Task 2'},{id:3, title:'Task 3'}]},
        {days: 'Вторник',idDay: 2, items:[{id:4, title:'Task 4'},{id:5, title:'Task 5'},{id:6, title:'Task 6'}]},
        {days: 'Среда',idDay: 3, items:[{id:7, title:'Task 7'},{id:8, title:'Task 8'},{id:9, title:'Task 9'}]},
        {days: 'Четверг',idDay: 4, items:[{id:10, title:'Task 10'},{id:11, title:'Task 11'},{id:12, title:'Task 12'}]},
        {days: 'Пятница',idDay: 5, items:[{id:13, title:'Task 13'},{id:14, title:'Task 14'},{id:15, title:'Task 15'}]},
        {days: 'Суббота',idDay: 6, items:[{id:16, title:'Task 16'},{id:17, title:'Task 17'},{id:18, title:'Task 18'}]},
        {days: 'Воскресенье',idDay: 7, items:[{id:19, title:'Task 19'},{id:20, title:'Task 20'},{id:21, title:'Task 21'}]}
    ])
    function addTodo(title, i){
        setListTodos(
            listTodos = listTodos.map(todo => {
                if(i===todo.idDay){
                    todo.items.push({id: new Date(), title})
                }
                return todo
            })
        );
    }
    return(
        <div className="week">
            {listTodos.map( weekDay => 
            <div key={weekDay.idDay} className="week__todos">
                <div className="week__day">{weekDay.days}</div>
                {weekDay.items.map( todo =>
                    <div key={todo.id} className="week__todo">{todo.title}</div>
                )}                
                <AddTodo id={weekDay.idDay} onCreate = {addTodo} />
            </div>
            )}
        </div>
    )
}

export default ListTodo;