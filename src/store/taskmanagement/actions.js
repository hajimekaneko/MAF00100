import * as types from './mutation-types'
import { Auth, List, Task } from '@/api'
// import { Auth, Task } from '@/api'


export default {

  addTask:({commit, state}, {TaskGroupId, Task}) => {
    console.log(TaskGroupId)
    console.log(Task)
    console.log(commit)
    console.log(state)
  },

  changestatus:({dispatch, state}, {status, List_Id, List_Status}) => {
    let nextstatus
    if(status===99){
      if(List_Status ===0 || List_Status ===1){
        nextstatus = List_Status + 1
      } else if (List_Status ===2) {
        nextstatus = 0 
      } else {
        console.log("ステータスがエラーです。")
      }
      console.log({List_Id, nextstatus})
    } else {
      nextstatus = status
    }
    console.log(nextstatus)
    return List.changestatus(state.auth.token, List_Id, nextstatus)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },

  addlist:({dispatch, state}, TaskId) => {
    return List.addlist(state.auth.token, TaskId)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },

  editlistname:({commit}, {TaskGroup_index, Task_index, List_index}) => {
    commit(types.EDITLISTNAME, {TaskGroup_index, Task_index, List_index})
  },
  editedlistname:({commit}, {TaskGroup_index, Task_index, List_index}) => {
    commit(types.EDITEDLISTNAME, {TaskGroup_index, Task_index, List_index})
  },
  changelistname:({dispatch, state}, {listID, newlistname}) => {
    return List.changename(state.auth.token, listID, newlistname)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },

  showtasks:({commit}, TaskGroup_index) => {
    commit(types.SHOWTASKS, TaskGroup_index)
  },

  showlists:({commit}, {Task_index, TaskGroup_index}) => {
    commit(types.SHOWLISTS, {Task_index, TaskGroup_index})
  },


  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        localStorage.setItem('token', token)
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(
        err => { throw err }
        )
  },
  

  fetchLists: ({ commit, state }) => {
    return List.fetch(state.auth.token)
      .then((response) => {
        // Group及びTaskに表示、非表示をコントロールするshowを追加
        if( response.lists != null){
          for (let i = 0; i < response.lists.length; i++){
            if( response.lists[i].Task != null){
              for (let j = 0; j < response.lists[i].Task.length; j++){
                if (response.lists[i].Task[j].List != null){
                  for (let k = 0; k < response.lists[i].Task[j].List.length; k++){
                    // Listへedit_listnameを追加
                    response.lists[i].Task[j].List[k].List_edit_listname=false
                  }
                }
                // Taskへshowを追加
                response.lists[i].Task[j].Task_show_list=true
              }
            }
            // Groupへshowを追加
            response.lists[i].TaskGroup_show_task=true
          }
        }
        console.log(response.lists)
        commit(types.FETCH_ALL_TASKLIST, response.lists)
      })
      .catch(err => { throw err })
  },


  addTask_: ({ commit, state }, { name, description, list }) => {
    return Task.add(state.auth.token, { list, description, name })
      .then((task) => {
        commit(types.ADD_TASK, task)
      })
      .catch(err => { throw err })
  },

  updateTask: ({ commit, state }, task) => {
    return Task.update(state.auth.token, task)
      .then(() => {
        commit(types.UPDATE_TASK, task)
      })
      .catch(err => { throw err })
  },

  removeTask: ({ commit, state }, { taskId, list }) => {
    return Task.remove(state.auth.token, taskId)
      .then(() => {
        commit(types.REMOVE_TASK, { taskId, list })
      })
      .catch(err => { throw err })
  },

  moveTaskFrom: ({ commit }, { taskId, ListId }) => {
    commit(types.MOVE_TASK_FROM, { targetId: taskId, from: ListId })
    return Promise.resolve()
  },

  moveToTask: ({ commit }, { taskId, ListId, tolist }) => {
    commit(types.MOVE_TO_TASK, { targetId: taskId, to: ListId, tolist: tolist })
    return Promise.resolve()
  },

  performTaskMoving: ({ commit, state }) => {
    const {target, from, to, tolist} = state.dragging
    return Task.move(state.auth.token, { taskId: target, list: tolist })
      .then(() => {
        commit(types.MOVE_TASK_DONE, { target, from, to })
      })
      .catch(err => { throw err })
  },

  logout: ({ commit, state }) => {
    return Auth.logout(state.auth.token)
      .then(() => {
        commit(types.AUTH_LOGOUT, { token: null, userId: null })
      })
      .catch(err => { throw err })
  }
}
