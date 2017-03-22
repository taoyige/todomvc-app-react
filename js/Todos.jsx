/**
 * Todos：todos列表和过滤父组件
 */
import React from 'react';
import TodoList from './TodoList.jsx';
import TodoFilter from './TodoFilter.jsx';

const Todos = React.createClass({
	todoProxy: function ({type, id, value, toggleAll}) {
		if('change' === type){
			this.props.todoChange(id);
		}else if('delete' === type){
			this.props.todoDelete(id);
		}else if('submit' === type){
			this.props.todoSubmit(id, value);
		}else if('clear-completed' === type){
			this.props.todoClear();
		}else if('toggle-all' === type){
			this.props.todoToggleAll(toggleAll);
		}
	},
	render: function () {
		return (
			<div id="todos">
				<TodoList todos={this.props.todos} todoProxy={this.todoProxy} pathname={this.props.location.pathname}/>
				<TodoFilter length={this.props.todos.length} todoProxy={this.todoProxy}></TodoFilter>
			</div>
		)
	}
})

export default Todos;
