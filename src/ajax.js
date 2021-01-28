//打桩，假的ajax
//2s后返回对应请求数据
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve.call(null, {id: 1, name: "howard"})
      } else if (path === "/books") {
        resolve.call(null, [{id: 1, name: "浪潮之巅"}, {id: 2, name: "数学之美"}])
      } else if (path === "/movies") {
        resolve.call(null, [{id: 1, name: "美国丽人"}, {id: 2, name: "断背山"}])
      }else{
        reject.call(null,{error:"404 unknown path"})
      }
    }, 2000)
  })
}
export default ajax