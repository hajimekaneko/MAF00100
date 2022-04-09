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
  }
}
