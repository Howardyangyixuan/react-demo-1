import React, {useState,useRef} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")

function App() {
  const nRef = useRef(0)
  const log = () => {
    setTimeout(() => {
      console.log(`n:${nRef.current}`)
    }, 1000)
  }
  return (
    <div className="App">
      <p>
        n:{nRef.current},但这里不能实时更新
      </p>
      <p>
        <button onClick={() => {
          nRef.current+=1
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
