let React = require ('react');

let NewsArticle = React.createClass({
    render() {
        let images = this.props.info.imgs.map((e, ind) => <img key={ind} src={e} alt="" height="100"/>);

        return (
            <section className="news-article container">
                <div className="row">
                    <div className="avatar col-sm-3"><img height="100" width="100" src={this.props.info.avatar} alt="avatar"/></div>
                    <div className="col-sm-9">
                        <h1>{this.props.info.header}<div className="small">{this.props.info.subheader}</div></h1>
                        <p className="mainText">{this.props.info.mainText}</p>
                        <div className="images">{images}</div>
                        <p className="location">{this.props.info.location}</p>
                    </div>
                </div>
            </section>
        )
    }
});

module.exports = NewsArticle;