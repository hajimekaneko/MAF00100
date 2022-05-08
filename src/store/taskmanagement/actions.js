import * as types from './mutation-types'
import { Auth, List, Task, TaskGroup } from '@/api'
// import { Auth, Task } from '@/api'


function changestatus(Content_Status, status) {
  console.log(Content_Status, status)
  let nextstatus
  if(status===99){
    if(Content_Status ===0 || Content_Status ===1){
      nextstatus = Content_Status + 1
    } else if (Content_Status ===2) {
      nextstatus = 0 
    } else {
      console.log("ステータスがエラーです。")
    }
  } else {
    nextstatus = status
  }
  return nextstatus
}

export default {
  addTask:({commit, state}, {TaskGroupId, Task}) => {
    console.log(TaskGroupId)
    console.log(Task)
    console.log(commit)
    console.log(state)
  },
  addtaskgroup:({dispatch, state}, UserId) => {
    return TaskGroup.addtaskgroup(state.auth.token, UserId)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },

  changeliststatus:({dispatch, state}, {status, List_Id, List_Status}) => {
    let nextstatus
    nextstatus =  changestatus(List_Status, status)
    return List.changestatus(state.auth.token, List_Id, nextstatus)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },

  changememo:({dispatch, state}, {status, newmemo, List_Id, List_Status}) => {
    let nextstatus
    nextstatus =  changestatus(List_Status, status)
    return List.changememo(state.auth.token, List_Id, nextstatus, newmemo)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },
  changetaskstatus:({dispatch, state}, {status, TaskId, Task_Status}) => {
    let nextstatus
    nextstatus =  changestatus(Task_Status, status)
    return Task.changestatus(state.auth.token, TaskId, nextstatus)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
  },
  changetaskgroupstatus:({dispatch, state}, {status, TaskGroupId, TaskGroup_Status}) => {
    let nextstatus
    nextstatus = changestatus(TaskGroup_Status, status)
    let UserId
    UserId =""
    return TaskGroup.changestatus(state.auth.token, TaskGroupId, nextstatus, UserId)
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
  edittaskname:({commit}, {TaskGroup_index, Task_index}) => {
    commit(types.EDITTASKNAME, {TaskGroup_index, Task_index})
  },
  editedtaskname:({commit}, {TaskGroup_index, Task_index}) => {
    commit(types.EDITEDTASKNAME, {TaskGroup_index, Task_index})
  },
  edittaskgroupname:({commit}, {TaskGroup_index}) => {
    commit(types.EDITTASKGROUPNAME, {TaskGroup_index})
  },
  editedtaskgroupname:({commit}, {TaskGroup_index}) => {
    commit(types.EDITEDTASKGROUPNAME, {TaskGroup_index})
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
  deletelist:({dispatch, state}, listID) => {
    return List.deletelist(state.auth.token, listID)
    .then(() => {
      dispatch('fetchLists')
    })
    .catch(err => { throw err })
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
                    response.lists[i].Task[j].List[k].List_edit_listname_flg=false
                  }
                }
                // Taskへshowを追加
                response.lists[i].Task[j].Task_show_list=true
                response.lists[i].Task[j].Task_edit_taskname_flg=false
              }
            }
            // Groupへshowを追加
            response.lists[i].TaskGroup_show_task=true
            response.lists[i].TaskGroup_edit_taskgroupname_flg=false
          }
        }
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
