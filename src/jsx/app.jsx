var React = require('react');
var ListsBox = require('./ListsBox.jsx');

// Component Structure
// - ListsBox
//   - List
//     - EntryBox
//       - EntryForm
//       - EntryList
//         - Entry
//           - EntryPrivacy

var interval = (loggedIn ? 2000 : 30000);

React.render(
  <ListsBox url="api/categories" pollInterval={interval} />,
  document.getElementById('content')
);
