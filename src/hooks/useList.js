import {useEffect, useState} from "react"

let database =
 [
  {id: 1, name: "Howard"},
  {id: 2, name: "Kevin"},
  {id: 3, name: "Evan"},
  {id: 4, name: "Michael"},
  {id: 5, name: "Bill"}
]

function useList() {
  console.log("useList执行了")
  const [user, setUser] = useState(null)
  const remove = (index)=>{
    database.splice(index,1)
    setUser([...database])
    console.log(user)
  }

  const add = (item)=>{
    database.push(item)
    setUser([...database])
    console.log(user)
  }
  useEffect(
    () => {
      //注意由于每次返回的是一个新的数组，所以user会变化，useState会引发重新渲染执行，因此需要使用useEffect才能避免重复请求
      ajax("/user").then(list => setUser(list))
    }
    , [])
  return (
    {
      user,
      remove,
      add
    }
  )
}

function ajax(url) {
  const data = database
  console.log(url)
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve.call(null, data)
      , 0)
  })
}

export default useList