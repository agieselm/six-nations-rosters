import React from 'react';

const Card = ({ img, name }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 logo'>
      <img alt='six-nation-teams' src={img} className='logo-images' />
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
