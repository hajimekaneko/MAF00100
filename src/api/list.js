import client from './client'

export default {
  fetch: token => {
    return new Promise((resolve, reject) => {
      client.get('/taskmanagement/task_groups', { headers: { 'x-kbn-token': token } })
        .then(
          response => resolve({ lists: response.data}),
          response => console.log(response.data),         
        )
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  changename: (token, listID, newlistname) => {
    return new Promise((resolve, reject) => {
      console.log(token, listID, newlistname )
      client.patch(`/taskmanagement/lists/${listID}/`, { 'List_name': newlistname },  { headers: { 'x-kbn-token': token } })
        .then(
          response => resolve({ lists: response.data}),
          response => console.log(response.data),         
        )
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
