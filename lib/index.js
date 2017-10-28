'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _getFormData = require('get-form-data');

var _getFormData2 = _interopRequireDefault(_getFormData);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoForm = (_temp2 = _class = function (_Component) {
  _inherits(AutoForm, _Component);

  function AutoForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, AutoForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this._onChange = function (e) {
      var _e$target = e.target,
          form = _e$target.form,
          name = _e$target.name;

      var data = (0, _getFormData.getNamedFormElementData)(form, name, { trim: _this.props.trim });
      var change = {};
      change[name] = data;
      _this.props.onChange(e, name, data, change);
    }, _this._onSubmit = function (e) {
      var data = (0, _getFormData2.default)(e.target, { trim: _this.props.trimOnSubmit || _this.props.trim });
      _this.props.onSubmit(e, data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AutoForm.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        Component = _props.component,
        onChange = _props.onChange,
        onSubmit = _props.onSubmit,
        trim = _props.trim,
        trimOnSubmit = _props.trimOnSubmit,
        props = _objectWithoutProperties(_props, ['children', 'component', 'onChange', 'onSubmit', 'trim', 'trimOnSubmit']);

    return _react2.default.createElement(Component, _extends({}, props, {
      children: children,
      onChange: onChange && this._onChange,
      onSubmit: onSubmit && this._onSubmit
    }));
  };

  return AutoForm;
}(_react.Component), _class.defaultProps = {
  component: 'form',
  trim: false,
  trimOnSubmit: false
}, _temp2);
exports.default = AutoForm;
AutoForm.propTypes = process.env.NODE_ENV !== "production" ? {
  component: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  trim: _propTypes2.default.bool,
  trimOnSubmit: _propTypes2.default.bool
} : {};
module.exports = exports['default'];