'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDnd = require('react-dnd');

var _Value = require('../Value');

var target = {
	canDrop: function canDrop(props, monitor) {
		var item = monitor.getItem();
		return item.contextId === props.contextId;
	},

	hover: function hover(props, monitor, component) {
		var dragIndex = monitor.getItem().index;
		var hoverIndex = props.index;
		component.setState({ dragIndex: dragIndex, hoverIndex: hoverIndex });
	},

	drop: function drop(props, monitor, component) {
		var handleSorting = props.handleSorting;
		var state = component.state;

		if (typeof handleSorting === 'function') {
			handleSorting(state.dragIndex, state.hoverIndex);
		}
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

var ValueSortContainer = (function (_Component) {
	_inherits(ValueSortContainer, _Component);

	function ValueSortContainer() {
		_classCallCheck(this, ValueSortContainer);

		_get(Object.getPrototypeOf(ValueSortContainer.prototype), 'constructor', this).apply(this, arguments);
		this.state = {
			dragIndex: -1,
			hoverIndex: -1
		};
	}

	_createClass(ValueSortContainer, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var connectDropTarget = _props.connectDropTarget;
			var isOver = _props.isOver;
			var canDrop = _props.canDrop;
			var className = _props.className;

			var allClassNames = (0, _classnames2['default'])(className, { 'Sort-item--CanDrop': canDrop && isOver, 'Sort-item--CantDrop': !canDrop && isOver });
			return connectDropTarget(_react2['default'].createElement(
				'div',
				{ className: allClassNames },
				this.props.children
			));
		}
	}]);

	return ValueSortContainer;
})(_react.Component);

ValueSortContainer.propTypes = {
	canDrop: _react.PropTypes.bool,
	children: _react.PropTypes.any,
	connectDropTarget: _react.PropTypes.func,
	handleSorting: _react.PropTypes.func.isRequired,
	isOver: _react.PropTypes.bool.isRequired,
	contextId: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]), //Unique Identifier for the drag context (parent component which contains the dnd context)
	className: _react.PropTypes.string //String of extra classnames to give to the container component (default: '')
};

ValueSortContainer.defaulProps = {
	className: ''
};

exports['default'] = (0, _reactDnd.DropTarget)(_Value.VALUE_ITEM, target, collect)(ValueSortContainer);
module.exports = exports['default'];