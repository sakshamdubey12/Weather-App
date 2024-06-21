// Pill.js
import React from 'react';
import { RxCross2 } from "react-icons/rx";
const Pill = ({ city, onRemove,onClick }) => {



  return (
    <div className="pill" onClick={()=>{onclick(city)}}>
      {city.toUpperCase()}
      <RxCross2 onClick={() => onRemove(city)} style={{'fontSize':'2rem','marginLeft':'5px','color':'red'}}/>
    </div>
  );
};


export default Pill;
