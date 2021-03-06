var React = require('react');
var $ = require('jquery');
var EntryList = require('./EntryList.jsx');
var EntryForm = require('./EntryForm.jsx');

var EntryBox = React.createClass({
  loadEntriesFromServer: function() {
    if(!this.props.parent_id) {
      // on optimistic add, doesn't have parent_id yet
      return;
    }
    var url = 'api/entries/in/' + this.props.parent_id;
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
    entry.parent = this.props.parent_id;
    entry.depth = this.props.depth + 1;
    var url = 'api/entries';
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: entry,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  handleEntryDelete: function(url, e_id) {
    var entries = this.state.data;
    var index = entries.map(function(e) { return e._id; }).indexOf(e_id);
    entries.splice(index, 1);
    this.setState({data: entries});
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadEntriesFromServer();
    this.poller = setInterval(this.loadEntriesFromServer, this.props.pollInterval);
  },
  componentWillUnmount: function() {
    clearInterval(this.poller);
  },
  render: function() {
    return (
      <div className="entryBox">
        <EntryList
          data={this.state.data}
          onEntryDelete={this.handleEntryDelete}
          onOpenList={this.props.onOpenList}/>
        {loggedIn && <EntryForm onEntrySubmit={this.handleEntrySubmit} /> }
      </div>
    );
  }
});

module.exports = EntryBox;