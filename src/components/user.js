import React, {useContext, useEffect} from "react"
import ajax from "../ajax"
import Context from "../Context"

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

export default User