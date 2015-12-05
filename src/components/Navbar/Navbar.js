import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className='navigation-items'>
        <Link className='links' to='/about'>About me</Link>
        <Link className='links' to='//terakilobyte.com'>Blog</Link>
        <Link className='links' to='//twitter.com/terakilobyte'>Twitter</Link>
        <Link className='links' to='//github.com/terakilobyte'>Github</Link>
        <Link className='links' to='/playground'>Playground</Link>
      </div>
    );
  }
}
