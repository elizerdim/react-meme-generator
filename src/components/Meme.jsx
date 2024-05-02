import { useEffect } from "react";
import { useState } from "react";
import { useId } from "react"

export default function Meme() {
  const [ meme, setMeme ] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [ allMemes, setAllMemes ] = useState([]);

// useEffect takes a function as its parameter. If that function
// returns something, it needs to be a cleanup function. Otherwise,
// it should return nothing. If we make it an async function, it
// automatically retuns a promise instead of a function or nothing.
// Therefore, if you want to use async operations inside of useEffect,
// you need to define the function separately inside of the callback
// function, as seen below:

// https://api.imgflip.com/get_memes

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes)
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme({...meme, randomImage: url})
  }

  const id = useId();

  return (
    <main>
      <div className="form">
        <label 
          htmlFor={id + "top-text"} 
          className="form--label top-text-label"
        >
          Top Text
        </label>
        <input 
          type="text" 
          id={id + "top-text"} 
          className="form--input top-text-input"
          placeholder="one does not simply"
          name="topText"
        />
        <label 
          htmlFor={id + "bottom-text"} 
          className="form--label bottom-text-label"
        >
          Bottom Text
        </label>
        <input 
          type="text" 
          id={id + "bottom-text"} 
          className="form--input bottom-text-input" 
          placeholder="walk into mordor"
          name="bottomText"
        />
        <button 
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}