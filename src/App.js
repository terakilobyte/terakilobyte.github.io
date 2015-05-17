var React = require('react');
require('./../styles/main.less');
var mui = require('material-ui');
var Navigation = require('./Navigation');

var messages = {
  'Hi': 'Bye',
  'Bye': 'Hi'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: props.message}
    this.handleClick = this.handleClick.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleClick() {
    this.setState({message: messages[this.state.message]});
  }

  toggleNav() {
    this.refs.nav.toggle();
  }

  render() {
    return (
      <div>
        <Navigation ref='nav' />
        <button onClick={this.toggleNav.bind(this)}>Open Nav</button>
        <h1 onClick={this.handleClick}>{this.state.message}</h1>
      </div>
    );
  }

};

App.propTypes = {
  message: React.PropTypes.string.isRequired
};

React.render(<App message="Hi"/>, document.getElementById('app'));
