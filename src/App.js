var React = require('react');

var messages = {
  'Hi': 'Bye',
  'Bye': 'Hi'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: props.message}
  }

  handleClick() {
    this.setState({message: messages[this.state.message]});
  }

  render() {
    return (
      <h1 onClick={this.handleClick.bind(this)}>{this.state.message}</h1>
    );
  }

};

App.propTypes = {
  message: React.PropTypes.string.isRequired
};

React.render(<App message="Hi"/>, document.getElementById('app'));
