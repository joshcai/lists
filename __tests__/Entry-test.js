jest.dontMock('../src/jsx/Entry.jsx');

var React = require('react/addons');
var Entry = require('../src/jsx/Entry.jsx');
var TestUtils = React.addons.TestUtils;

describe('Entry', function() {

  var mockSendDelete = function() {};
  var mockOpenList = function() {};
  var EntryElement = TestUtils.renderIntoDocument(
    <Entry key={0} e_id={0} name={"hello"} url={"api/entries/0"}
      onOpenList={mockOpenList} onEntryDelete={mockSendDelete}/>
      );

  var link = TestUtils.findRenderedDOMComponentWithTag(EntryElement, 'a');

  it('has a link with the name', function() {
    expect(link.getDOMNode().textContent).toEqual('hello');
  });

});