import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
  baseURL
})

const state = {
  userToken: localStorage.getItem('kowiEmpToken') ? localStorage.getItem('kowiEmpToken') : '',
  userName: localStorage.getItem('kowiEmpName') ? localStorage.getItem('kowiEmpName') : '',
  userId: localStorage.getItem('kowiEmpId') ? localStorage.getItem('kowiEmpId') : '',
  userDoj: localStorage.getItem('kowiEmpDoj') ? localStorage.getItem('kowiEmpDoj') : '',
  userEmail: localStorage.getItem('kowiEmpEmail') ? localStorage.getItem('kowiEmpEmail') : '',

}
const getters = {
  userToken(state) {
    return state.userToken
  },
  userName(state) {
    return state.userName
  },
  userId(state) {
    return state.userId
  },
  userDoj(state) {
    return state.userDoj
  },
  userEmail(state) {
    return state.userEmail
  },

}


const mutations = {

  SET_USER_DATA: (state, data) => {
    state.userToken = data.token
    state.userName = data.name
    state.userId = data.emp_id
    state.userDoj = data.emp_dateofjoining
    state.userEmail = data.email
    localStorage.setItem('kowiEmpToken', data.token)
    localStorage.setItem('kowiEmpName', data.name)
    localStorage.setItem('kowiEmpId', data.emp_id)
    localStorage.setItem('kowiEmpDoj', data.emp_dateofjoining)
    localStorage.setItem('kowiEmpEmail', data.email)
  },

  DELETE_DATA: (state) => {
    state.userToken = ''
    localStorage.clear();
  },


}

const actions = {
  loginUser({ commit }, payload) {
    console.log(payload);
    return $http.post('/elogin/', payload).then(res => {
      commit('SET_USER_DATA', res.data)
      return Promise.resolve(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserPersonalDetail({ commit }, { token, detail }) {
    return $http.post('/addpersonal/', detail, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'undefined'
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserBankDetail({ commit }, { token, detail }) {
    return $http.post('/addbank/', detail, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'undefined'
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserAddressDetail({ commit }, { token, detail }) {
    return $http.post('/addaddress/', detail, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'undefined'
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },

  logoutUser({ commit }) {
    commit('DELETE_DATA')
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
