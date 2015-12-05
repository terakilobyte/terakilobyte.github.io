import React from 'react';
import 'styles/core.scss';
import Navbar from '../components/Navbar/Navbar';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
