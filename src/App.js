import React, {createContext, useContext, useEffect, useReducer, useRef, useState} from "react"
import "./App.css"

const Context = createContext(null)

function App() {
  const [n, setN] = useState(0)
  return (
    <Context.Provider value={{n, setN}}>
      <div>
        <Father/>
      </div>
    </Context.Provider>
  )
}

function Child() {
  const {n, setN} = useContext(Context)
  return (
    <div>
      Child:{n}
      <button onClick={() => setN(n + 1)}>Child button</button>
    </div>
  )
}

function Father() {
  const {n, setN} = useContext(Context)
  return (
    <div>
      Father:{n}
      <button onClick={() => setN(n + 1)}>Father button</button>
      <Child/>
    </div>
  )
}

export default App
