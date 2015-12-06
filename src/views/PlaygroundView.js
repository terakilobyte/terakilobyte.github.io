import React from 'react';
import { Link } from 'react-router';
import ProjectWell from 'components/ProjectWell/ProjectWell';

const PlaygroundView = () => {
  return (
    <div>
      <ProjectWell link='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
        source='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
      />
    </div>
  );
};

export default PlaygroundView;
