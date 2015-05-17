/**
 * Created by nathanleniz on 5/16/15.
 */

var React = require('react');
var {LeftNav} = require('material-ui');
var navLinks = require('./links/navLinks.json');

class Navigation extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  render() {

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        menuItems={navLinks}
      />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }
}

module.exports = Navigation;
