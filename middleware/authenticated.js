// 验证是否登陆
export default function ({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/login')
  }
}