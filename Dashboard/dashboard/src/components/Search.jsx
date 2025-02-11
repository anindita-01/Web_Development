import React, { useState } from 'react'
import { mockSearchResults } from '../constants/mock';
// import {XIcon} from '@heroicons/react/24/solid';
import { BeakerIcon } from '@heroicons/react/24/solid'


const Search = () => {
const [input, setInput]= useState("");
const [bestMatches, setBestMatches]= useState(mockSearchResults.result);

const clear =()=>{
    setInput("");
    setBestMatches([]);
};
const updateBestMatches=()=>{
    setBestMatches(mockSearchResults.result);
};

  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
        <input 
         type='text'
         value={input}
         className='w-full px-4 py-2 focus:outline-none rounded-md'
         placeholder='Search stock here...'
         onChange={(event)=>{
            setInput(event.target.value)
         }}
         onKeyDown={(event)=>{
            if(event.key=== "Enter"){
            updateBestMatches();
            }
         }}
        />
      
      {input && (<button onClick={clear}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>)}
    </div>
  )
}

export default Search
