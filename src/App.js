import React, {useState, useRef} from "react"
import ReactDOM from "react-dom"
import "./App.css"

const rootElement = document.getElementById("root")
const themeContext = React.createContext(null)


function App() {
  const [user, setUser] = React.useState({name: "howard", age: 18})
  const change = () => {
    user.name = 'yyx'
    setUser({
      ...user//需要产生新的地址
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
