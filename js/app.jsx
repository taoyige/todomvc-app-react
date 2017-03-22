import React from 'react';
import ReactDOM from 'react-dom';
import TodosRouter from './TodosRouter.jsx';
import Info from './Info.jsx';
require('../node_modules/todomvc-app-css/index.css');
require('../css/app.css');

ReactDOM.render(
	<div>
		<TodosRouter></TodosRouter>
		<Info></Info>
	</div>,
	document.getElementById('example')
)
