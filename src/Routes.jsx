var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var useRouterHistory  = ReactRouter.useRouterHistory;
var createHashHistory = require('history/lib/createHashHistory');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var Base = require('./pages/Base.jsx');
var News = require('./pages/News.jsx');
var Photos = require('./pages/Photos.jsx');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <Route path="/news" component={News}/>
            <Route path="/photos" component={Photos}/>
        </Route>
    </Router>
);

module.exports = Routes;