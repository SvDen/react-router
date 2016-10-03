var React = require('react');
let NewsArticle = require('./../components/NewsArticle.jsx');

var News = React.createClass({
    getInitialState() {
          return {
              news: [
                  {
                      author: 'Fred',
                      header: 'Obesity in America',
                      subheader: 'Why are Americans so fat?',
                      mainText: 'Us Americans are fat. On every corner there is a McDonalds or KFC Michelle Obama wants Americans to become Vegan. Civil war and unrest have sprung up due to this debate...',
                      imgs: [],
                      location: 'Kentucky, USA'
                  }
              ]
          }
    },



    render() {
        let news = this.state.news.map((e, ind) => <NewsArticle info={e} key={ind}/>);

        return (
            <h1>News {news}</h1>
        )
    }
});

module.exports = News;