import React, {createContext, useContext, useEffect, useReducer, useRef} from "react"
import "./App.css"
import User from "./components/user"
import Books from "./components/book"
import Movies from "./components/movies"
import Context from "./Context"
import {findAllInRenderedTree} from "react-dom/test-utils"

//1.集中数据到store
const store = {
  user: null,
  books: null,
  movies: null
}

//2.集中操作到reducer
const operations = {
  "setUser": (state, action) => {
    return {...state, user: action.user}
  },
  "setBooks": (state, action) => {
    return {...state, books: action.books}
  },
  "setMovies": (state, action) => {
    return {...state, movies: action.movies}
  },
}
const reducer = (state, action) => {
  const fn = operations[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error("unknown action type")
  }
}


function App() {

  //4.创建对数据读写API，只能运行在函数里面
  const [state, dispatch] = useReducer(reducer, store)

  //5.将上面的API放在Context里
  return (
    <div>
      {/*6.通过value将Reducer*/}
      <Context.Provider value={{state, dispatch}}>
        <div>
          {/*7.在组件内使用读写API*/}
          <User/>
          <hr/>
          <Books/>
          <Movies/>
        </div>
      </Context.Provider>
    </div>
  )
}


export default App
