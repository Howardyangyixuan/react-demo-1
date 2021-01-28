import React, {useContext} from "react"
import ajax from "../ajax"
import Context from "../Context"

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

export default Movies