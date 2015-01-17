var React = require('react');
var Entry = require('./Entry.jsx');

var EntryList = React.createClass({
  render: function() {
    var entryNodes = this.props.data.map(function (entry) {
      return (
        <Entry key={entry._id} name={entry.name} url={"api/entries/"+entry._id}/>
      );
    });
    return (
      <div className="entryList">
        {entryNodes}
      </div>
    );
  }
});

module.exports = EntryList;