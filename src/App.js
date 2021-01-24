import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")

function App() {
  const [n, setN] = useState(0)
  const log = () => {
    setTimeout(() => {
      console.log(`n:${n}`)
    }, 3000)
  }
  return (
    <div className="App">
      <p>
        n:{n}
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
          log()
        }}>
          log
        </button>
      </p>
    </div>
  )
}

export default App
