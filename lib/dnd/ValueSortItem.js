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

var _reactDnd = require('react-dnd');

var _Value = require('../Value');

var dragSource = {

	beginDrag: function beginDrag(props) {
		return {
			index: props.index,
			contextId: props.contextId
		};
	},

	endDrag: function endDrag(props, monitor) {
		if (!monitor.didDrop()) {
			return;
		}
	}
};

function collect(connect, monitor) {
	return {
		// Call this function inside render()
		// to let React DnD handle the drag events:
		connectDragSource: connect.dragSource(),
		// You can ask the monitor about the current drag state:
		isDragging: monitor.isDragging(),
		connectDragPreview: connect.dragPreview()
	};
}

var ValueSortItem = (function (_Component) {
	_inherits(ValueSortItem, _Component);

	//Lifecycle

	function ValueSortItem() {
		_classCallCheck(this, ValueSortItem);

		_get(Object.getPrototypeOf(ValueSortItem.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ValueSortItem, [{
		key: 'render',
		value: function render() {
			//const url = `url(${this.props.url}) no-repeat`;
			var _props = this.props;
			var isDragging = _props.isDragging;
			var connectDragSource = _props.connectDragSource;
			var connectDragPreview = _props.connectDragPreview;
			var previewUrl = _props.previewUrl;
			var previewHtml = _props.previewHtml;

			var item = connectDragSource(_react2['default'].createElement(
				'div',
				null,
				!isDragging ? this.props.children : false
			));
			return item;
		}
	}]);

	return ValueSortItem;
})(_react.Component);

ValueSortItem.propTypes = {
	children: _react.PropTypes.any,
	connectDragSource: _react.PropTypes.func.isRequired,
	connectDragPreview: _react.PropTypes.func.isRequired,
	isDragging: _react.PropTypes.bool.isRequired,
	previewHeight: _react.PropTypes.string,
	previewHtml: _react.PropTypes.any,
	previewWidth: _react.PropTypes.string,
	previewUrl: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string])
};

ValueSortItem.defaultProps = {
	previewHtml: false,
	previewHeight: '200px',
	previewWidth: '200px',
	previewUrl: false
};

exports['default'] = (0, _reactDnd.DragSource)(_Value.VALUE_ITEM, dragSource, collect)(ValueSortItem);
module.exports = exports['default'];