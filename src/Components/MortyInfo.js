import React from 'react';
import Episodes from "./Episodes";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";


const MortyInfo = ({rickUrl}) => {
  const[ rickMorty, setRickMorty] = useState({})

  useEffect(() => {
    axios
      .get(rickUrl)
        .then((res) => setRickMorty(res.data));
  }, [rickUrl])

  console.log(rickMorty)

  return (
        <div className="container-all-info">
            <img src={rickMorty?.image} alt="" />
            <h1>{rickMorty.name}</h1>
            <h3>Race: <br />{rickMorty.species}</h3>
            <h3>Origin: <br /> {rickMorty.origin?.name}</h3>
            {
                rickMorty.episode?.map((url) => (
                <Episodes url={url} key={url} />
                ))
             }
        </div>
  );
};

export default MortyInfo;