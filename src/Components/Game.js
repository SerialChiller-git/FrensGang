import {currentPlayer} from './Gallery'
import { useEffect, useState } from 'react';
import './Style/Game.css'
import { FrensData } from '../Data/Data';

function findInd(){
    let index = 0;
    for(index = 0; index < FrensData.length; index++){
        if(FrensData[index].image === currentPlayer){
            return index;
        }
    }
}

function randomNumberInRange(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

export default function Game(){
    const [score, setScore] = useState(0);
    const scorerIndex = findInd();
    const [images, setImages] = useState(Array(9).fill(null).map(() => FrensData[randomNumberInRange(0, FrensData.length - 1)].image));

    useEffect(() => {
        const intervalID = setInterval(() => {
            setImages(Array(9).fill(null).map(() => FrensData[randomNumberInRange(0, FrensData.length - 1)].image));
        }, 900);

        return () => clearInterval(intervalID);
    }, []);
    
    return(
    <>
    <div className='title'>
        <h1>Your Character</h1>
    </div>
    <div className='title'>
        <img className='playerImg' src={currentPlayer} />
    </div>
    <div className='title'>
        <h2>Score: {score}</h2>
    </div>
    <div className='row'>
    {
        images.map((img, index) => (
            <Square key={index} value={img} score={score} setScore={setScore} scorerIndex={scorerIndex} />
        ))
    }
    </div>

    </>
    );
}

function Square({value, score, setScore, scorerIndex}){
    function handleClick(){
        if(value === FrensData[scorerIndex].image){
            setScore(score+1);
        }
        else{
            setScore(score-1);
        }
        console.log(score);
    }

   return <button onClick={handleClick} className='box'> <img src={value} width={50} height={50}/> </button>
}
