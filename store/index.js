const cookieparser = process.server ? require('cookieparser') : undefined
//在服务端node渲染期间都是同一个实例
//为了防止数据冲突，这里和客户端使用不一样，需要定义成函数
export const state = () => {
  return {
    user: { name: '' }
  }
}
export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}
export const actions = {
  //nuxtServerinit是特殊的一个 action方法
  //这个action会在服务端渲染期间自动调用
  //作用初始化state,传递给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parse = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parse.user)
      } catch (error) {

      }
    }
    commit('setUser', auth)
  }
}