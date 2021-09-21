import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
  baseURL
})

const state = {

}

const mutations = {



}

const actions = {
  fetchMeetLink({ commit }, token) {
    return $http.get('/meeting/', {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'undefined'
      }
    }).then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  postUserOtp({ commit }, { token, query }) {
    var bodyFormData = new FormData();
    bodyFormData.append('otp', query);
    return $http.post('/attendancecheck/', bodyFormData, {
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data)
      return Promise.resolve(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },

}
const getters = {


}

export default {
  state,
  getters,
  mutations,
  actions
}
