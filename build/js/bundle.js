webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react2.default.createClass({
	displayName: "Info",

	render: function render() {
		return _react2.default.createElement(
			"footer",
			{ className: "info" },
			_react2.default.createElement(
				"p",
				null,
				"Double-click to edit a todo"
			),
			_react2.default.createElement(
				"p",
				null,
				"Template by ",
				_react2.default.createElement(
					"a",
					{ href: "http://sindresorhus.com" },
					"Sindre Sorhus"
				)
			),
			_react2.default.createElement(
				"p",
				null,
				"Created by ",
				_react2.default.createElement(
					"a",
					{ href: "http://todomvc.com" },
					"you"
				)
			),
			_react2.default.createElement(
				"p",
				null,
				"Part of ",
				_react2.default.createElement(
					"a",
					{ href: "http://todomvc.com" },
					"TodoMVC"
				)
			)
		);
	}
}); /**
     * Info：脚注
     */
exports.default = Info;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(34);

var _TodoApp = __webpack_require__(117);

var _TodoApp2 = _interopRequireDefault(_TodoApp);

var _Todos = __webpack_require__(73);

var _Todos2 = _interopRequireDefault(_Todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosRouter = _react2.default.createClass({
	displayName: 'TodosRouter',

	render: function render() {
		var routes = _react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _TodoApp2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _Todos2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'active', component: _Todos2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'completed', component: _Todos2.default })
		);
		return _react2.default.createElement(_reactRouter.Router, { routes: routes, history: _reactRouter.hashHistory });
	}
});

exports.default = TodosRouter;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = _react2.default.createClass({
	displayName: 'Input',

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var value = e.target.childNodes[0].value;
		this.props.todoInput(value);
		e.target.childNodes[0].value = '';
	},
	render: function render() {
		return _react2.default.createElement(
			'header',
			{ className: 'header' },
			_react2.default.createElement(
				'h1',
				null,
				'todos'
			),
			_react2.default.createElement(
				'form',
				{ action: '#', onSubmit: this.handleSubmit },
				_react2.default.createElement('input', { className: 'new-todo', placeholder: 'What needs to be done?', autoFocus: true })
			)
		);
	}
}); /**
     * Input：输入框组件
     */
exports.default = Input;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(34);

var _Input = __webpack_require__(116);

var _Input2 = _interopRequireDefault(_Input);

var _Todos = __webpack_require__(73);

var _Todos2 = _interopRequireDefault(_Todos);

var _utils = __webpack_require__(120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoApp = _react2.default.createClass({
	displayName: 'TodoApp',

	getInitialState: function getInitialState() {
		var todos = (0, _utils.getTodos)();
		return {
			todos: todos
		};
	},
	componentDidUpdate: function componentDidUpdate(props, state) {
		(0, _utils.saveTodosToLocal)(this.state.todos);
	},
	todoChange: function todoChange(id) {
		var todos = this.state.todos;
		for (var i = 0; i < todos.length; i++) {
			if (id == todos[i].id) {
				todos[i].completed = !todos[i].completed;
			}
		}
		this.setState({
			todos: todos
		});
	},
	todoDelete: function todoDelete(id) {
		var todos = this.state.todos;
		var arr = [];
		for (var i = 0; i < todos.length; i++) {
			if (id != todos[i].id) {
				arr.push(todos[i]);
			}
		}
		this.setState({
			todos: arr
		});
	},
	todoSubmit: function todoSubmit(id, value) {
		var todos = this.state.todos;
		for (var i = 0; i < todos.length; i++) {
			if (id == todos[i].id) {
				todos[i].todo = value;
			}
		}
		this.setState({
			todos: todos
		});
	},
	todoClear: function todoClear() {
		var todos = this.state.todos;
		var arr = [];
		for (var i = 0; i < todos.length; i++) {
			if (!todos[i].completed) {
				arr.push(todos[i]);
			}
		}
		this.setState({
			todos: arr
		});
	},
	todoInput: function todoInput(todo) {
		var id = (0, _utils.uuid)();
		var todos = this.state.todos;
		todos.push({ id: id, todo: todo, completed: false });
		this.setState({
			todos: todos
		});
	},
	todoToggleAll: function todoToggleAll(toggleAll) {
		var todos = this.state.todos;
		for (var i = 0; i < todos.length; i++) {
			todos[i].completed = toggleAll;
		}
		this.setState({
			todos: todos
		});
	},
	render: function render() {
		var todos = this.state.todos;
		return _react2.default.createElement(
			'section',
			{ className: 'todoapp' },
			_react2.default.createElement(_Input2.default, { todoInput: this.todoInput }),
			_react2.default.cloneElement(this.props.children, { todos: this.state.todos, todoChange: this.todoChange, todoDelete: this.todoDelete, todoSubmit: this.todoSubmit, todoClear: this.todoClear, todoInput: this.todoInput, todoToggleAll: this.todoToggleAll })
		);
	}
}); /**
     * TodoApp：父组件
     */

exports.default = TodoApp;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TodoFilter：过滤
 */
var TodoFilter = _react2.default.createClass({
	displayName: 'TodoFilter',

	clearCompleted: function clearCompleted() {
		this.props.todoProxy({ type: 'clear-completed' });
	},
	render: function render() {
		return _react2.default.createElement(
			'footer',
			{ style: { display: this.props.length == 0 ? 'none' : 'block' }, className: 'footer' },
			_react2.default.createElement(
				'span',
				{ className: 'todo-count' },
				_react2.default.createElement(
					'strong',
					null,
					this.props.length
				),
				' item left'
			),
			_react2.default.createElement(
				'ul',
				{ className: 'filters' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.IndexLink,
						{ to: '/', activeClassName: 'selected' },
						'all'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/active', activeClassName: 'selected' },
						'active'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/completed', activeClassName: 'selected' },
						'completed'
					)
				)
			),
			_react2.default.createElement(
				'button',
				{ className: 'clear-completed', onClick: this.clearCompleted },
				'Clear completed'
			)
		);
	}
});

exports.default = TodoFilter;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = _react2.default.createClass({
	displayName: 'TodoList',

	getInitialState: function getInitialState() {
		return {
			currentEditingId: -1,
			toggleAll: true
		};
	},
	handleChange: function handleChange(e) {
		var id = e.target.parentElement.parentElement.id;
		this.props.todoProxy({ type: 'change', id: id });
	},
	handleDelete: function handleDelete(e) {
		var id = e.target.parentElement.parentElement.id;
		this.props.todoProxy({ type: 'delete', id: id });
	},
	handleEditing: function handleEditing(e) {
		var id = e.target.parentElement.parentElement.id;
		this.setState({
			currentEditingId: id
		});
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var value = e.target.childNodes[0].value;
		var id = e.target.parentElement.id;
		this.props.todoProxy({ type: 'submit', id: id, value: value });
		this.setState({
			currentEditingId: -1
		});
	},
	handleToggleAll: function handleToggleAll(e) {
		this.setState({
			toggleAll: !this.state.toggleAll
		});
		this.props.todoProxy({ type: 'toggle-all', toggleAll: this.state.toggleAll });
	},
	render: function render() {
		var _this = this;

		var type = this.props.pathname;
		return _react2.default.createElement(
			'section',
			{ className: 'main' },
			_react2.default.createElement('input', { onChange: this.handleToggleAll, className: 'toggle-all', type: 'checkbox' }),
			_react2.default.createElement(
				'label',
				{ htmlFor: 'toggle-all' },
				'Mark all as complete'
			),
			_react2.default.createElement(
				'ul',
				{ className: 'todo-list' },
				this.props.todos.map(function (item, index) {
					var completed = item.completed ? 'completed' : '';
					var editing = _this.state.currentEditingId == item.id ? 'editing' : '';
					if (type == '/') {
						return _react2.default.createElement(
							'li',
							{ className: completed + ' ' + editing, key: index, id: item.id },
							_react2.default.createElement(
								'div',
								{ className: 'view' },
								_react2.default.createElement('input', { onChange: _this.handleChange, className: 'toggle', type: 'checkbox', checked: item.completed }),
								_react2.default.createElement(
									'label',
									{ onDoubleClick: _this.handleEditing },
									item.todo
								),
								_react2.default.createElement('button', { onClick: _this.handleDelete, className: 'destroy' })
							),
							_react2.default.createElement(
								'form',
								{ action: '#', onSubmit: _this.handleSubmit },
								_react2.default.createElement('input', { className: 'edit', defaultValue: item.todo })
							)
						);
					} else if (type == '/active') {
						if (!item.completed) {
							return _react2.default.createElement(
								'li',
								{ className: completed + ' ' + editing, key: index, id: item.id },
								_react2.default.createElement(
									'div',
									{ className: 'view' },
									_react2.default.createElement('input', { onChange: _this.handleChange, className: 'toggle', type: 'checkbox', checked: item.completed }),
									_react2.default.createElement(
										'label',
										{ onDoubleClick: _this.handleEditing },
										item.todo
									),
									_react2.default.createElement('button', { onClick: _this.handleDelete, className: 'destroy' })
								),
								_react2.default.createElement(
									'form',
									{ action: '#', onSubmit: _this.handleSubmit },
									_react2.default.createElement('input', { className: 'edit', defaultValue: item.todo })
								)
							);
						}
					} else if (type == '/completed') {
						if (item.completed) {
							return _react2.default.createElement(
								'li',
								{ className: completed + ' ' + editing, key: index, id: item.id },
								_react2.default.createElement(
									'div',
									{ className: 'view' },
									_react2.default.createElement('input', { onChange: _this.handleChange, className: 'toggle', type: 'checkbox', checked: item.completed }),
									_react2.default.createElement(
										'label',
										{ onDoubleClick: _this.handleEditing },
										item.todo
									),
									_react2.default.createElement('button', { onClick: _this.handleDelete, className: 'destroy' })
								),
								_react2.default.createElement(
									'form',
									{ action: '#', onSubmit: _this.handleSubmit },
									_react2.default.createElement('input', { className: 'edit', defaultValue: item.todo })
								)
							);
						}
					}
				})
			)
		);
	}
}); /**
     * TodoList：todos列表
     */
exports.default = TodoList;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTodos = function getTodos() {
	var todos = localStorage['todos'] ? JSON.parse(localStorage['todos']) : [];
	return todos;
};

var saveTodosToLocal = function saveTodosToLocal(todos) {
	localStorage['todos'] = JSON.stringify(todos);
};

var uuid = function uuid() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';
	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	}
	return uuid;
};

exports.getTodos = getTodos;
exports.saveTodosToLocal = saveTodosToLocal;
exports.uuid = uuid;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TodosRouter = __webpack_require__(113);

var _TodosRouter2 = _interopRequireDefault(_TodosRouter);

var _Info = __webpack_require__(112);

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(115);
__webpack_require__(114);

_reactDom2.default.render(_react2.default.createElement(
	'div',
	null,
	_react2.default.createElement(_TodosRouter2.default, null),
	_react2.default.createElement(_Info2.default, null)
), document.getElementById('example'));

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _TodoList = __webpack_require__(119);

var _TodoList2 = _interopRequireDefault(_TodoList);

var _TodoFilter = __webpack_require__(118);

var _TodoFilter2 = _interopRequireDefault(_TodoFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todos = _react2.default.createClass({
	displayName: 'Todos',

	todoProxy: function todoProxy(_ref) {
		var type = _ref.type,
		    id = _ref.id,
		    value = _ref.value,
		    toggleAll = _ref.toggleAll;

		if ('change' === type) {
			this.props.todoChange(id);
		} else if ('delete' === type) {
			this.props.todoDelete(id);
		} else if ('submit' === type) {
			this.props.todoSubmit(id, value);
		} else if ('clear-completed' === type) {
			this.props.todoClear();
		} else if ('toggle-all' === type) {
			this.props.todoToggleAll(toggleAll);
		}
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ id: 'todos' },
			_react2.default.createElement(_TodoList2.default, { todos: this.props.todos, todoProxy: this.todoProxy, pathname: this.props.location.pathname }),
			_react2.default.createElement(_TodoFilter2.default, { length: this.props.todos.length, todoProxy: this.todoProxy })
		);
	}
}); /**
     * Todos：todos列表和过滤父组件
     */
exports.default = Todos;

/***/ })

},[242]);