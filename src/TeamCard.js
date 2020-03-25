import React from 'react';

const TeamCard = ({ img, name, bg }) => {
  return (
    <div
      className='tc dib br3 pa3 ma2 grow bw2 shadow-5 logo'
      style={{ backgroundColor: { bg } }}
    >
      <img alt='six-nation-teams' src={img} className='logo-images' />
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default TeamCard;
