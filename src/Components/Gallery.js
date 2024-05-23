import { FrensData } from "../Data/Data";
import { useState } from "react";
import "./Style/Gallery.css"
import { Link } from "react-router-dom";
export let currentPlayer;

export default function Gallery(){
  const [index, setIndex] = useState(0);

  function changeIndex(){
    if(index+1 === FrensData.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }
  let currentFren = FrensData[index];
  currentPlayer = currentFren.image;
  

  return(
    <>
      <button onClick={changeIndex}>
        Next Friend
      </button>
      <h2>
        <i>{currentFren.name}</i><br/>
        sex: {currentFren.sex} 
      </h2>
      <h3>
        Friend {index+1} of {FrensData.length}
      </h3>
      <Link to="gamepage">
        <img 
        className="fren-image"
        src={currentFren.image} alt={currentFren.alt} />
      </Link>
      <h4>
        Quote: <b><i>"{currentFren.quote}"</i></b>
      </h4>
    </>
  );
}