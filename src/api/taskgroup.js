import client from './client'

export default {
  addtaskgroup: (token, UserId) => {
    return new Promise((resolve, reject) => {
      client.post('/taskmanagement/task_groups/',{ "User": UserId, "TaskGroup_name": "newTaskGroup", "TaskGroup_status":0 }, { headers: { 'x-kbn-token': token } })
        .then(
          
          // response => resolve({ lists: response.data}),
          response => console.log( response.data)
        )
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  changestatus: (token, TaskGroupId, nextstatus, UserId) => {
    return new Promise((resolve, reject) => {
      console.log({TaskGroupId, nextstatus})
      client.patch(`/taskmanagement/task_groups/${TaskGroupId}/`, { "User": UserId,'TaskGroup_status_No': nextstatus },  { headers: { 'x-kbn-token': token } })
        .then(
          response => resolve({ lists: response.data}),
        )
        .catch(err => {
          console.log("aaa")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
}
