/**
* @jsx React.DOM
*/

var React = require('react');

class App extends React.Component {
  constuctor(props) {
    console.log(props);
    super(props);
    this.setState = {message: this.props.message}
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }

};

App.propTypes = {
  message: React.PropTypes.string 
};
App.defaultProps = {
  message: 'hi'
}


React.render(<App message="Hello World"/>, document.getElementById('app'));
