import React, {createContext, useContext, useEffect, useReducer, useRef} from "react"
import "./App.css"
import User from "./components/user"
import Books from "./components/book"
import Movies from "./components/movies"
import Context from "./Context"

//1.集中数据到store
const store = {
  user: null,
  books: null,
  movies: null
}

//2.集中操作到reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {...state, user: action.user}
    case "setBooks":
      return {...state, books: action.books}
    case "setMovies":
      return {...state, movies: action.movies}
    default:
      throw new Error()
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
