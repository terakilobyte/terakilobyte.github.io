import React from 'react';
import { Link } from 'react-router';
import ProjectWell from 'components/ProjectWell/ProjectWell';
import 'styles/PlaygroundView.scss';

const projects = [
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png',
    source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png'
  }
];

const PlaygroundView = () => {
  const playgroundPreviews = projects.map((elem, ix) => (
      <ProjectWell key={ix} link={elem.link} source={elem.source} />
  ));
  return (
    <div className='playground'>
      {playgroundPreviews}
    </div>
  );
};

export default PlaygroundView;
