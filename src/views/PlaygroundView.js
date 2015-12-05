import React from 'react';
import { Link } from 'react-router';
import ProjectWell from 'components/ProjectWell/ProjectWell';

const PlaygroundView = () => {
  return (
    <div>
      <Link to='/'>Back</Link>
      <ProjectWell />
    </div>
  );
};

export default PlaygroundView;
