var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Nice title"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas List"/>, document.getElementById('christmas'));