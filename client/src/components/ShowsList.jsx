var React = require('react');
var Show = require('./Show.jsx');

var ShowsList = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {

    var showElements = this.props.showsData.map(function(showData){
      return (
        <Show key = {showData.id} showData = {showData}/>
      )
    });

    return (
      <div>
        <h2>Shows</h2>
        <ul>
          {showElements}
        </ul>
      </div>
    );
  }
});

module.exports = ShowsList;