import React, {createRef, forwardRef, useRef, useState} from "react"
import "./App.css"

function App() {
  const ref = useRef(null)
  const onClick = ()=>{
    ref.current.innerText = 'hi'
  }
  return (
    <div>
      <FancyButton ref={ref}>xxx</FancyButton>
      <button onClick={onClick}>change</button>
    </div>
  )
}
function Button(props,ref) {
  return (
    <button ref={ref}>I am a DOM button</button>
  )

}

const FancyButton = forwardRef(Button)


export default App
