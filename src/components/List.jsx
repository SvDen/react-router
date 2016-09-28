var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
    {"id": 1, "text": "ham"},
    {"id": 2, "text": "cheese"},
    {"id": 3, "text": "potatos"},
];

var List = React.createClass({
    render() {
        var listItems = ingredients.map(item => <ListItem key={item.id} ingredient={item.text}/>);

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
});

module.exports = List;