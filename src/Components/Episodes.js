import React from 'react';

const Episodes = ({url}) => {

    const epiArr = url.split("/");
    const episode = epiArr[5];

  return (
    <div>
      <h3>Episodes: {episode}</h3>
    </div>
  );
};

export default Episodes;