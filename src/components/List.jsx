var React = require('react');
var ListItem = require('./ListItem.jsx');


var List = React.createClass({
    render() {
        var listItems = this.props.items.map(item => <ListItem key={Math.random()} text={item}/>);

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
});

module.exports = List;