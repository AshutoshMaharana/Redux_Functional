import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { buyCake } from '../redux';
import { useState } from 'react';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    const [number,setNumber] = useState(1)
  return <div>
      <h2>
          Num of Cakes - {numOfCakes}
      </h2>
      <input type = 'text' value={number} onChange = {(e) => setNumber(e.target.value)}/>
      <button onClick={() => dispatch(buyCake(number))}>
          Buy {number } Cakes 
      </button>
  </div>;
};

export default HooksCakeContainer;
