var React = require('react');
var ShowsList = require('./ShowsList');
var showsData = require('../mockShowData');

var Shows = React.createClass({
  render: function() {
    return (
      <div>
        <ShowsList showsData = {showsData}/>
      </div>
    );
  }

});

module.exports = Shows;