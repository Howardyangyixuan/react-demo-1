import React, {memo, useRef, useState} from "react"
import "./App.css"

function App() {
  const autoRender = useState(0)[1]
  const n = useRef(0)
  const onClick = () => {
    n.current += 1
    console.log(n)
    autoRender(n.current)
  }

  return (
    <div>
      n:{n.current}
      <button onClick={onClick}>n+1
      </button>
    </div>
  )
}

export default App
