import client from './client'

export default {
  addlist: (token, TaskId, content) => {
    return new Promise((resolve, reject) => {
      console.log({TaskId, content})

      client.patch(`/taskmanagement/tasks/${TaskId}/`, {
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
  changestatus: (token, Task_Id, nextstatus) => {
    return new Promise((resolve, reject) => {
      console.log({Task_Id, nextstatus})
      client.patch(`/taskmanagement/tasks/${Task_Id}/`, { 'Task_status': nextstatus },  { headers: { 'x-kbn-token': token } })
        .then(
          response => resolve({ lists: response.data}),
        )
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
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
