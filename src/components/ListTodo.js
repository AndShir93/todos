import React, {useState} from 'react';
import AddTodo from './AddTodo'

function ListTodo(){
    let [currentBoard,setCurrentBoard] = useState(null)
    let [currentItem, setCurrentItem] = useState(null)

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
                    todo.items.push({id: Date.now(), title})
                }
                localStorage.setItem('todos', JSON.stringify(listTodos))
                return todo
            })
        );
    }
    function dragOverHandler(e){
        e.preventDefault()
    }
    function dragLeaveHandler(e){
    }
    function dragStartHandler(e, board, item){
        setCurrentBoard(board)
        setCurrentItem(item)
    }
    function dragEndHandler(e){

    }
    function dropHandler(e, board, item){
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        const dropIndex = board.items.indexOf(item)
        if(currentIndex !== dropIndex){    
            currentBoard.items.splice(currentIndex, 1)        
            currentBoard.items.splice(dropIndex, 0, currentItem)
            setListTodos(listTodos.map(t  => {
                if(board.idDay === t.idDay){
                    return board
                }if(currentBoard.idDay === t.idDay){
                    return currentBoard
                }
                localStorage.setItem('todos', JSON.stringify(listTodos))
                return t
            }))
        }
    }
    function dropCardHandler(e, board){
        const currentIndex = currentBoard.items.indexOf(currentItem)
        if(currentBoard.idDay !== board.idDay){
            board.items.push(currentItem)
            currentBoard.items.splice(currentIndex, 1)
            setListTodos(listTodos.map(t  => {
                if(board.idDay === t.idDay){
                    return board
                }if(currentBoard.idDay === t.idDay){
                    return currentBoard
                }
                localStorage.setItem('todos', JSON.stringify(listTodos))
                return t
            }))
        }
    }
    return(
        <div className="week">
            {listTodos.map( weekDay => 
            <div key={weekDay.idDay}
                onDragOver = {(e)=>dragOverHandler(e)}
                onDrop = {(e) => dropCardHandler(e, weekDay)}
                 className="week__todos">
                <div className="week__day">{weekDay.days}</div>
                {weekDay.items.length ?( weekDay.items.map( todo =>
                    <div key={todo.id} className="week__todo" 
                    draggable={true}
                    onDragOver = {(e)=>dragOverHandler(e)}
                    onDragLeave = {(e) => dragLeaveHandler(e)}
                    onDragStart = {(e) => dragStartHandler(e, weekDay, todo)}
                    onDragEnd = {(e) => dragEndHandler(e)}
                    onDrop = {(e) => dropHandler(e, weekDay, todo)}
                    >{todo.title}</div>
                )):<p>Add todo ...</p>}                
                <AddTodo id={weekDay.idDay} onCreate = {addTodo} />
            </div>
            )}
        </div>
    )
}

export default ListTodo;