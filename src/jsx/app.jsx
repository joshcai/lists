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

React.render(
  <CategoryBox url="api/categories" pollInterval={2000} />,
  document.getElementById('content')
);
