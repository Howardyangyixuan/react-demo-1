import React, {memo, useEffect, useLayoutEffect, useReducer, useRef, useState} from "react"
import "./App.css"

function App() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const fn = () => {
    setN(n + 1)
  }


  return (
    <div>
      <p>n:{n}</p>
      <button onClick={() => {
        setN(n + 1)
      }}>n+1
      </button>
      <hr/>
      memoChild:
      <MemoChild data={m} onClick={fn}/>
    </div>
  )
}

const MemoChild = memo(Child)

function Child(props) {
  console.log("Child render")
  return (
    <div>
      m:{props.data}
      <button onClick={props.onClick}>
        n+1
      </button>
    </div>
  )
}

export default App
