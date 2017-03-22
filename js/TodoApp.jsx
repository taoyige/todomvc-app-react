/**
 * TodoApp：父组件
 */

import React from 'react';
import { Router, Route, hashHistory} from 'react-router';
import Input from './Input.jsx';
import Todos from './Todos.jsx';
import { getTodos, saveTodosToLocal, uuid } from './utils.jsx';


const TodoApp = React.createClass({
	getInitialState: function () {
		let todos = getTodos();
		return {
			todos: todos,
		}
	},
	componentDidUpdate: function (props, state) {
		saveTodosToLocal(this.state.todos);
	},
	todoChange: function (id) {
		let todos = this.state.todos;
		for(let i=0; i<todos.length; i++){
			if(id == todos[i].id){
				todos[i].completed = !todos[i].completed;
			}
		}
		this.setState({
			todos: todos
		})
	},
	todoDelete: function (id) {
		let todos = this.state.todos;
		let arr = [];
		for(let i=0; i<todos.length; i++){
			if(id != todos[i].id){
				arr.push(todos[i]);
			}
		}
		this.setState({
			todos: arr
		})
	},
	todoSubmit: function (id, value) {
		let todos = this.state.todos;
		for(let i=0; i<todos.length; i++){
			if(id == todos[i].id){
				todos[i].todo = value;
			}
		}
		this.setState({
			todos: todos
		})
	},
	todoClear: function () {
		let todos = this.state.todos;
		let arr = [];
		for(let i=0; i<todos.length; i++){
			if(!todos[i].completed){
				arr.push(todos[i]);
			}
		}
		this.setState({
			todos: arr
		})
	},
	todoInput: function (todo) {
		let id = uuid();
		let todos = this.state.todos;
		todos.push({id: id, todo: todo, completed: false})
		this.setState({
			todos: todos
		})
	},
	todoToggleAll: function (toggleAll) {
		let todos = this.state.todos;
		for(let i=0; i<todos.length; i++){
			todos[i].completed = toggleAll;
		}
		this.setState({
			todos: todos
		})
	},
	render: function () {
		var todos = this.state.todos;
		return (
			<section className="todoapp">
				<Input todoInput={this.todoInput}></Input>
				{ React.cloneElement(this.props.children, {todos: this.state.todos, todoChange: this.todoChange, todoDelete: this.todoDelete, todoSubmit: this.todoSubmit, todoClear: this.todoClear, todoInput: this.todoInput, todoToggleAll: this.todoToggleAll,}) }
			</section>
		);
	}
})

export default TodoApp;
