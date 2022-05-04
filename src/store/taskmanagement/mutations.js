import * as types from './mutation-types'

export default {


  

  [types.ADDGROUP] (state, Task_index) {
    // APIでDBに追加しておく
    console.log(Task_index)
  },
  [types.EDITLISTNAME] (state, {TaskGroup_index, Task_index, List_index}) {
    state.board.lists[TaskGroup_index].Task[Task_index].List[List_index].List_edit_listname_flg = true
  },
  [types.EDITEDLISTNAME] (state, {TaskGroup_index, Task_index, List_index}) {
    state.board.lists[TaskGroup_index].Task[Task_index].List[List_index].List_edit_listname_flg = false
  },
  [types.CHANGELISTNAME] (state, {TaskGroup_index, Task_index, List_index, newlistname}) {
    state.board.lists[TaskGroup_index].Task[Task_index].List[List_index].List_edit_listname_flg = false
    state.board.lists[TaskGroup_index].Task[Task_index].List[List_index].List_name = newlistname
  },
  
  [types.SHOWTASKS] (state, TaskGroup_index) {
    state.board.lists[TaskGroup_index].TaskGroup_show_task = !state.board.lists[TaskGroup_index].TaskGroup_show_task
  },
  [types.SHOWLISTS] (state, {Task_index, TaskGroup_index}) {
    state.board.lists[TaskGroup_index].Task[Task_index].Task_show_list=!state.board.lists[TaskGroup_index].Task[Task_index].Task_show_list
  },
  [types.CHANGESTATUS] (state,{nextstatus, TaskGroup_index, Task_index, List_index}) {
    state.board.lists[TaskGroup_index].Task[Task_index].List[List_index].List_status = nextstatus
  },
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },

  [types.FETCH_ALL_TASKLIST] (state, payload) {
    state.board.lists = payload
  },

  [types.ADD_TASK] (state, payload) {
    const task = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.ListId === task.list.ListId) {
        list.tasks.push(task)
        break
      }
    }
  },

  [types.UPDATE_TASK] (state, payload) {
    const task = payload
    
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.ListId !== task.list.ListId) { continue }    
      for (let j = 0; j < list.tasks.length; j++) {
        const item = list.tasks[j]      
        if (item.taskId === task.taskId) {
          item.name = task.name
          item.description = task.description
          break
        }
      }
    }
  },

  [types.REMOVE_TASK] (state, payload) {
    const { taskId, list} = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const newlist = state.board.lists[i]
      if (newlist.ListId !== list.ListId) { continue }
      newlist.tasks = newlist.tasks.filter(task => task.taskId !== taskId)
    }
  },

  [types.AUTH_LOGOUT] (state, payload) {
    state.auth = payload
  },

  [types.MOVE_TASK_FROM] (state, payload) {
    const { targetId, from } = payload
    state.dragging.target = targetId
    state.dragging.from = from
  },

  [types.MOVE_TO_TASK] (state, payload) {
    const { targetId, to, tolist } = payload
    state.dragging.target = targetId
    state.dragging.to = to
    state.dragging.tolist = tolist
  },

  [types.MOVE_TASK_DONE] (state, payload) {
    const { target, from, to } = payload
    
    const getTaskList = (lists, id) => lists.find(list => list.ListId === id)
    // ドラッグ&ドロップ処理のための状態をリセット
    state.dragging.target = null
    state.dragging.from = null
    state.dragging.to = null

    // 移動元のタスクリストから対象タスクを取り出す
    const fromTaskList = getTaskList(state.board.lists, from)
    const index = fromTaskList.tasks.findIndex(item => item.taskId === target)
    const task = fromTaskList.tasks[index]
    fromTaskList.tasks.splice(index, 1)

    // 移動先のタスクリストIDに変更
    task.ListId = to

    // 移動先にタスクリストに対象タスクを格納
    const toTaskList = getTaskList(state.board.lists, to)
    toTaskList.tasks.push(task)
  }
}
