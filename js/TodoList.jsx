/**
 * TodoList：todos列表
 */
import React from 'react';

const TodoList = React.createClass({
	getInitialState: function () {
		return {
			currentEditingId: -1,
			toggleAll: true,
		}
	},
	handleChange: function (e) {
		let id = e.target.parentElement.parentElement.id;
		this.props.todoProxy({ type: 'change', id: id });
	},
	handleDelete: function (e) {
		let id = e.target.parentElement.parentElement.id;
		this.props.todoProxy({ type: 'delete', id: id });
	},
	handleEditing: function (e) {
		let id = e.target.parentElement.parentElement.id;
		this.setState({
			currentEditingId: id,
		})
	},
	handleSubmit: function (e) {
		e.preventDefault();
		let value = e.target.childNodes[0].value;
		let id = e.target.parentElement.id;
		this.props.todoProxy({ type: 'submit', id: id, value: value });
		this.setState({
			currentEditingId: -1,
		})
	},
	handleToggleAll: function (e) {
		this.setState({
			toggleAll: !this.state.toggleAll,
		})
		this.props.todoProxy({ type: 'toggle-all', toggleAll: this.state.toggleAll });
	},
	render: function () {
		let type = this.props.pathname;
		return (
			<section className="main">
				<input onChange={this.handleToggleAll} className="toggle-all" type="checkbox"></input>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{
						this.props.todos.map((item, index) => {
							let completed = item.completed ? 'completed':'';
							let editing = this.state.currentEditingId==item.id?'editing':'';
							if(type == '/'){
								return (
									<li className={`${completed} ${editing}`} key={index} id={item.id}>
										<div className="view">
											<input onChange={this.handleChange} className="toggle" type="checkbox" checked={item.completed}></input>
											<label onDoubleClick={this.handleEditing}>{ item.todo }</label>
											<button onClick={this.handleDelete} className="destroy"></button>
										</div>
										<form action="#" onSubmit={this.handleSubmit}>
											<input className="edit" defaultValue={item.todo}></input>
										</form>
									</li>
								)
							}else if(type == '/active'){
								if(!item.completed){
									return (
										<li className={`${completed} ${editing}`} key={index} id={item.id}>
											<div className="view">
												<input onChange={this.handleChange} className="toggle" type="checkbox" checked={item.completed}></input>
												<label onDoubleClick={this.handleEditing}>{ item.todo }</label>
												<button onClick={this.handleDelete} className="destroy"></button>
											</div>
											<form action="#" onSubmit={this.handleSubmit}>
												<input className="edit" defaultValue={item.todo}></input>
											</form>
										</li>
									)
								}
							}else if(type == '/completed'){
								if(item.completed){
									return (
										<li className={`${completed} ${editing}`} key={index} id={item.id}>
											<div className="view">
												<input onChange={this.handleChange} className="toggle" type="checkbox" checked={item.completed}></input>
												<label onDoubleClick={this.handleEditing}>{ item.todo }</label>
												<button onClick={this.handleDelete} className="destroy"></button>
											</div>
											<form action="#" onSubmit={this.handleSubmit}>
												<input className="edit" defaultValue={item.todo}></input>
											</form>
										</li>
									)
								}
							}

						})
					}
				</ul>
			</section>
		)
	}
})

export default TodoList;
