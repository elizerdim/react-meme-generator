import { useId } from "react"

export default function Meme() {

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
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src="" alt="meme image" className="meme--image"/>
        <h2 className="meme--text top"></h2>
        <h2 className="meme--text bottom"></h2>
      </div>
    </main>
  )
}