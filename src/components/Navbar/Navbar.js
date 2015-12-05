import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default class Navbar extends React.Component {
  render () {
    return (
      <ul className='navigation-items'>
        <li>About me</li>
        <li>Blog</li>
        <li>Twitter</li>
        <li>Github</li>
        <li>Playground</li>
      </ul>
    );
  }
}
