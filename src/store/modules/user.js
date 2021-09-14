import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
  baseURL
})

const state = {
  userToken: localStorage.getItem('kowiEmpToken') ? localStorage.getItem('kowiEmpToken') : '',

}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.userToken = token
    localStorage.setItem('kowiEmpToken', token)
  },
  DELETE_TOKEN: (state) => {
    state.userToken = ''
    localStorage.clear();
  },


}

const actions = {
  loginUser({ commit }, payload) {
    console.log(payload);
    return $http.post('/elogin/', payload).then(res => {
      commit('SET_TOKEN', res.data['token'])
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserBankDetail({ commit }, { token, detail }) {
    // return $http.post('/addbank/', detail, {
    //   headers: {
    //     'Authorization': `Token ${token}`,
    //     'Content-Type': 'undefined'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // }).catch(err => {
    //   console.log(err)
    //   return Promise.reject(err)
    // })
  },

  logoutUser({ commit }) {
    commit('DELETE_TOKEN')
  },

}
const getters = {
  userToken(state) {
    return state.userToken
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
