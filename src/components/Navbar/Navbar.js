import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className='navigation-items'>
        <Link className='links' to='/about'>About me</Link>
        <a className='links' to='http://terakilobyte.com'>Blog</a>
        <a className='links' to='http://twitter.com/terakilobyte'>Twitter</a>
        <a className='links' to='http://github.com/terakilobyte'>Github</a>
        <Link className='links' to='/playground'>Playground</Link>
      </div>
    );
  }
}
