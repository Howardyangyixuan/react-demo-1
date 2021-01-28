import React, {useContext} from "react"
import ajax from "../ajax"
import Context from "../Context"

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

export default Books