var React = require('react');
var Entry = require('./Entry.jsx');

var EntryList = React.createClass({
  render: function() {
    var entryNodes = this.props.data.map(function (entry) {
      return (
        <Entry
          key={entry._id}
          e_id={entry._id}
          name={entry.name}
          priv={entry.priv}
          url={"api/entries/"+entry._id}
          onOpenList={this.props.onOpenList}
          onEntryDelete={this.props.onEntryDelete}/>
      );
    }, this);
    return (
      <div className="entryList">
        {entryNodes}
      </div>
    );
  }
});

module.exports = EntryList;