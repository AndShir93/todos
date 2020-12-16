import './App.css';
import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import Context from './context'
import DragAndDrop from './components/DragAndDrop'

function App() {
	let [todos, setTodos] = React.useState( JSON.parse(localStorage.getItem('todo')) || [])


	function toggleTodo(id){
		setTodos(
			todos = todos.map(todo => {
				if( todo.id === id){
					todo.completed = !todo.completed
				}
				return todo;
			})
		)
	}

	function removeTodo(id){
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function addTodo(title){
		setTodos(
			todos.concat([{
				title,
				id: Date.now(),
				completed: false
			}])
		)
	}

	return (
		<Context.Provider value={{removeTodo}}>
			<div className="App">
				<InputTodo onCreate = { addTodo }/>
				{todos.length ? (<ListTodo list={todos} change = { toggleTodo }/>) : (<p>Empty</p>) }
				<DragAndDrop/>
			</div>
		</Context.Provider>
	);
}

export default App;
