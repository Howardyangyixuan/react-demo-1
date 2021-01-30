import {useEffect, useState} from "react"

function useList() {
  console.log("useList执行了")
  const [user, setUser] = useState(null)
  useEffect(
    () => {
      //注意由于每次返回的是一个新的数组，所以user会变化，useState会引发重新渲染执行，因此需要使用useEffect才能避免重复请求
      ajax("/user").then(list => setUser(list))
    }
    , [])
  return (
    {
      user,
      setUser
    }
  )
}

function ajax(url) {
  console.log(url)
  const data = [
    {id: 1, name: "Howard"},
    {id: 2, name: "Kevin"},
    {id: 3, name: "Evan"},
    {id: 4, name: "Michael"},
    {id: 5, name: "Bill"}
  ]
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve.call(null, data)
      , 3000)
  })
}

export default useList