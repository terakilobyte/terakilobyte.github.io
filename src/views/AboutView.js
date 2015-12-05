import React from 'react';
import { Link } from 'react-router';

const AboutView = () => (
  <div className='container text-center'>
    <h1>There isn't a lot to see here, is there?</h1>
    <hr />
    <Link to='/'>Back To Home View</Link>
  </div>
);

export default AboutView;
