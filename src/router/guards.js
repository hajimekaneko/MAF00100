import store from '@/store'

export const authorizeToken = (to, from, next) => {
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意:
    // このアプリケーションでは簡略化のため`auth.token`があるかどうかのみで
    // ログイン済みであるかどうかチェックしているが、
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
    // console.log(to.matched)
    // console.log(to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.requiresAuth)) { //メタフィールドに`requiresAuth`が付与されているか確認
    console.log("meta")
    if (!store.state.auth || !store.state.auth.token) { //認証されていない
      console.log("認証されていない")
      // console.log(store.state)
      next({ path: '/taskmanagement/login' })
      // next({ path: '/taskmanagement' })
    } else {//認証されている
      console.log("認証されている")
      next()
    }
  } else if (to.path === '/taskmanagement/login' && store.state.auth.token) { //認証済み
    console.log("meta2")
    next({ path: '/taskmanagement/' })
  } else { //そのまま
    next()
  }
}
