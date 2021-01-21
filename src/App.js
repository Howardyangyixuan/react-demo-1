import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")

let mystate = []
let index = 0
const myUseState = initValue => {
  const myIndex = index;
  if (mystate[myIndex] === undefined) {
    mystate[myIndex] = initValue
  }
  const setState = newValue => {
    mystate[myIndex] = newValue
    render()
  }
  index += 1
  return [mystate[myIndex], setState]
}
const render = () => {
  index = 0;
  ReactDOM.render(<App/>, rootElement)
}

function App() {
  console.log("running")
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  console.log(mystate)
  return (
    <div className="App">
      <p>
        n:{n}
        m:{m}
      </p>
      <p>
        <button onClick={() => {
          setN(n + 1)
        }}>
          +1
        </button>
      </p>
      <p>
        <button onClick={() => {
          setM(m + 1)
        }}>
          +1
        </button>

      </p>
    </div>
  )
}

export default App
