import React, {createContext, useContext, useEffect, useReducer, useRef} from "react"
import "./App.css"
import ajax from "./ajax"

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

//3.创建Context
const Context = createContext(null)


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

function User() {
  const {state, dispatch} = useContext(Context)
  useEffect(() => {
    ajax("/user").then(user => {
      dispatch({type: "setUser", user})
    })
  }, [])
  return (
    <div>
      <h1>个人信息</h1>
      <div>name:{state.user ? state.user.name : "加载中"}</div>
    </div>
  )
}

function Books() {
  const {state, dispatch} = useContext(Context)
  ajax("/books").then(books => {
    dispatch({type: "setBooks", books})
  })
  return (
    <div>
      <h1>我的书籍</h1>
      <div>books:{state.books ? state.books.map((item) =>
        <li key={item.id}>{item.name}</li>
      ) : "加载中"
      }</div>
    </div>
  )
}

function Movies() {
  const {state, dispatch} = useContext(Context)
  ajax("/movies").then(movies => {
    dispatch({type: "setMovies", movies})
  })
  return (
    <div>
      <h1>我的电影</h1>
      <div>movies:{state.movies ? state.movies.map((item) =>
        <li key={item.id}>{item.name}</li>
      ) : "加载中"
      }</div>
    </div>
  )
}

export default App
