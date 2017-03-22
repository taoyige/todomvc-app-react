/**
 * Input：输入框组件
 */
import React from 'react';

let Input = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		let value = e.target.childNodes[0].value;
		this.props.todoInput(value);
		e.target.childNodes[0].value = '';
	},
	render: function () {
		return (
			<header className="header">
				<h1>todos</h1>
					<form action="#" onSubmit={this.handleSubmit}>
						<input className="new-todo" placeholder="What needs to be done?" autoFocus>
						</input>
					</form>
			</header>
		)
	}
})

export default Input;
