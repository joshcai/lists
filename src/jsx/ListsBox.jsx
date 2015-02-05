var React = require('react');
var $ = require('jquery');
var List = require('./List.jsx');

var ListsBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  togglePreview: function() {
    loggedIn = !loggedIn;
  },
  render: function() {
    console.log(this.state.data);
    var listNodes = this.state.data.map(function (list) {
      return (
        <List
          key={list._id}
          parent_id={list._id}
          name={list.name}
          url={"api/entries/in/"+list._id}/>
      );
    }, this);
    console.log(listNodes);
    return (
      <div className="lists row">
        {listNodes}
      </div>
    );
  }
});

module.exports = ListsBox;