var React = require('react');
var ListManager = require('./ListManager.jsx');

var Page1 = React.createClass({
    render() {
        return (
            <ListManager title="Page 1"/>
        )
    }
});

module.exports = Page1;