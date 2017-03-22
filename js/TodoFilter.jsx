/**
 * TodoFilter：过滤
 */
import React from 'react';
import { Link, IndexLink } from 'react-router';

const TodoFilter = React.createClass({
	clearCompleted: function () {
		this.props.todoProxy({ type: 'clear-completed' });
	},
	render: function () {
		return (
			<footer style={{ display: this.props.length==0?'none':'block' }} className="footer">
				<span className="todo-count"><strong>{this.props.length}</strong> item left</span>
				<ul className="filters">
					<li><IndexLink to="/" activeClassName="selected">all</IndexLink></li>
          <li><Link to="/active" activeClassName="selected">active</Link></li>
          <li><Link to="/completed" activeClassName="selected">completed</Link></li>
				</ul>
				<button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
			</footer>
		)
	}
})

export default TodoFilter;
