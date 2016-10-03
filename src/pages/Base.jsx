var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
    render() {

        return (
            <div>
                <header id="header" className="header">
                    <div className="container">
                        <h1>Country News</h1>
                        <small>Top stories in my country</small>
                    </div>
                </header>
                <main id="main-content">
                    <div className="container">
                        <ul role="nav" className="links">
                            <li><Link to="/news" className="link">News</Link></li>
                            <li><Link to="/photos" className="link">Photos</Link></li>
                        </ul>
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
});

module.exports = Main;