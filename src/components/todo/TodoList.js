import React from 'react'
import SingleTodo from './SingleTodo'

const TodoList = ({ todos, toggleTodo, deleteTodo, setEditStatus, updateTodo }) => (
  <div>
    {todos.map(item =>
    <SingleTodo 
        key={item.id} 
        todo={item} 
        toggleTodo = {toggleTodo}
        deleteTodo = {deleteTodo}
        setEditStatus = {setEditStatus}
        updateTodo = {updateTodo} />
    )}
  </div>
)


export default TodoList;