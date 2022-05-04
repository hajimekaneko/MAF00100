import client from './client'

export default {
  addlist: (token, TaskId, content) => {
    return new Promise((resolve, reject) => {
      console.log({TaskId, content})

      client.patch(`/taskmanagement/tasks/${TaskId}/`, {
    //     'List': [{
    //     "ListId": 2,
    //     "List_sortId": 1,
    //     "List_name": "リスト1_1_1aaa",
    //     "List_status": {
    //         "TaskStatusId": 1,
    //         "TaskStatus_name": "未着手"
    //     },
    //     "List_memo": "リスト１のメモ",
    //     "List_created_at": "2022-04-09T13:27:59.556230+09:00",
    //     "List_updated_at": "2022-04-27T23:33:57.360825+09:00"
    // },
    // {
    //     "ListId": 3,
    //     "List_sortId": 1,
    //     "List_name": "リスト1_1_2",
    //     "List_status": {
    //         "TaskStatusId": 1,
    //         "TaskStatus_name": "未着手"
    //     },
    //     "List_memo": "リスト1_1_2",
    //     "List_created_at": "2022-04-09T14:38:44.399899+09:00",
    //     "List_updated_at": "2022-04-27T23:33:54.110394+09:00"
    // }]
    "Task_status":0
  },{ headers: { 'x-kbn-token': token } })
        .then(
          // response => resolve({ lists: response.data}),
          response => console.log(response),         
        )
        .catch(err => {
          console.log("err")
          reject(new Error(err.response || err.message))
        })
    })
  },
  add: (token, { name, description, list }) => {

    return new Promise((resolve, reject) => {

      client.post(`/taskmanagement/tasks/`, { name, description, list }, { headers: { 'x-kbn-token': token } })
        .then(response => resolve(response.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, { taskId, name, description, list }) => {
    return new Promise((resolve, reject) => {
      client.put(`/taskmanagement/tasks/${taskId}/`, { name, description, list }, { headers: { 'x-kbn-token': token } })
      // client.put(`/taskmanagement/tasks/${taskId}/`, {name, description})
        .then(
          () => resolve()
        )
        .catch(err => {
          console.log("err")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  remove: (token, taskId ) => {
    return new Promise((resolve, reject) => {
      client.delete(`/taskmanagement/tasks/${taskId}/`, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  move: (token, { taskId, list }) => {
    return new Promise((resolve, reject) => {
      client.put(`/taskmanagement/tasks/${taskId}/`, {list}, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
