import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./App.css"
const rootElement = document.getElementById("root")

let mystate
const myUseState = initValue =>{
  mystate = mystate === undefined ? initValue : mystate;
  const setState = newValue =>{
    mystate = newValue
    render()
  }
  return [mystate,setState]
}
const render = ()=>{
  ReactDOM.render(<App/>,rootElement);
}
function App() {
  console.log("running")
  const [n, setN] = myUseState(0)
  return (
    <div className="App">
      <p>
        {n}
      </p>
      <p>
        <button onClick={() => {
          setN(n + 1)
        }}>
          +1
        </button>
      </p>
    </div>
  )
}

export default App
