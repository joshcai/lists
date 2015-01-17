var React = require('react');
var $ = require('jquery');
var EntryList = require('./EntryList.jsx');
var EntryForm = require('./EntryForm.jsx');

var EntryBox = React.createClass({
  loadEntriesFromServer: function() {
    var url = 'api/entries/in/' + this.props.cat_id;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  handleEntrySubmit: function(entry) {
    var entries = this.state.data;
    var newEntries = entries.concat([entry]);
    this.setState({data: newEntries});
    entry.category = this.props.cat_id;
    var url = 'api/entries';
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: entry,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadEntriesFromServer();
    setInterval(this.loadEntriesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="entryBox">
        <EntryList data={this.state.data} />
        <EntryForm onEntrySubmit={this.handleEntrySubmit} />
      </div>
    );
  }
});

module.exports = EntryBox;