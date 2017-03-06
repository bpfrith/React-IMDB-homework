var React = require('react');

var Show = React.createClass({
  render: function(){
    var showData = this.props.showData;
    return (
      <div className = "show">
        <a href={showData.url}>{showData.title}</a>
      </div>
    )
  }
});

module.export = Show;