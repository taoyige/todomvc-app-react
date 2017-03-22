import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import TodoApp from './TodoApp.jsx';
import Todos from './Todos.jsx';

const TodosRouter = React.createClass({
	render: function () {
		const routes = (
			<Route path='/' component={ TodoApp }>
				<IndexRoute component={Todos}/>
		    <Route path="active" component={Todos}/>
		    <Route path="completed" component={Todos}/>
			</Route>
		)
		return <Router routes={ routes } history={ hashHistory }/>;
	}
})

export default TodosRouter;
