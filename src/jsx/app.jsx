var React = require('react');
var CategoryBox = require('./CategoryBox.jsx');

// Component Structure
// - CategoryBox
//   - CategoryList
//     - Category
//       - EntryBox
//         - EntryForm
//         - EntryList
//           - Entry
//   - CategoryForm

var interval = (loggedIn ? 2000 : 30000);

React.render(
  <CategoryBox url="api/categories" pollInterval={interval} />,
  document.getElementById('content')
);
