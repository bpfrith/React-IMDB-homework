var React = require('react');
var ShowsList = require('./ShowsList.jsx');
var showsData = require('../mockShowData.js');

var Shows = React.createClass({
  render: function(){
    return (
      <div>
        <ShowsList showsData = {showsData}/>
      </div>
    );
  }
});

module.exports = Shows;