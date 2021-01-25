import React, {useState, useRef} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")
const themeContext = React.createContext(null)


function App() {
  const [user, setUser] = React.useState({name: "howard", age: 18})
  const change = () => {
    setUser({
      ...user,//需要自行合并
      age: 23
    })
  }
  return (
    <div>
      <p>user: </p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <button onClick={() => {
        change()
      }}>
        grow
      </button>
    </div>
  )
}


export default App
