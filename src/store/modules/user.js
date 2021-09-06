import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
  baseURL
})

const state = {
  isLoggedIn: true,
  userToken: localStorage.getItem('token') ? localStorage.getItem('token') : '',
 
  user: localStorage.getItem('name') ? localStorage.getItem('name') : '',
  my_profile: null,
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.userToken = token
    localStorage.setItem('token', token)
  },
  
  
  
  SET_USER_PROFILE: (state, token) => {
    state.userToken = token
    localStorage.setItem('token', token)
    // localStorage.setItem('name', name)
  },
  IS_AUTHENTICATED(state) {
    state.isLoggedIn = true
  },

  DELETE_TOKEN: (state) => {
    state.userToken = ''
    localStorage.removeItem('token')
  },
  FORGOT_PASSWORD_SET_OTP_VALIDATION: (state, data) => {
    state.forgot_password_user = data
  },
  SET_MY_PROFILE: (state, profile) => {
    state.my_profile = profile
  }

}

const actions = {
  loginUser({ commit }, token) {
    // context.commit('IS_AUTHENTICATED')
    commit('SET_TOKEN', token)
  },

  username(context) {
    context.commit('USER')
  },
  checkUserLoggedIn({ commit }, payload) {
    // return $http.post('/auth', payload).then(res => {
      // commit('SET_USER_PROFILE', res.data)
      commit('SET_USER_PROFILE', payload)
    // }).catch(err => {
    //   console.log(err)
    //   return Promise.reject(err)
    // })
  },
  userSignUp({ commit }, payload) {
    return $http.post('/user', payload).then(res => {
      // console.log(res)
    })
  },
  logoutUser({ commit }) {
    commit('DELETE_TOKEN')
  },
  forgotPasswordSendOtp({ commit }, { email }) {
    return $http.post('/user/forgot', { email }).then(res => {
      // commit('FORGOT_PASSWORD_SEND_OTP', )
    })
  },
  forgotPasswordValidateOtp({ commit }, { email, otp }) {
    return $http.post('/user/forgot/validate', { email, otp }).then(res => {
      commit('FORGOT_PASSWORD_SET_OTP_VALIDATION', res.data)
    })
  },
  forgotPasswordUpdate({ commit }, { password, password_again, otp, user_id, email }) {
    return $http.put(`/user/${user_id}?forgot_password=true`, { password, password_again, otp, email })
  },
  updateProfile({ commit }, { profile, token }) {
    let formdata = new FormData()
    for (let key in profile) {
      if (profile[key]) {
        formdata.append(key, profile[key])
      }

    }
    return $http.put('user/me', formdata, {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'undefined'
      }
    }).then(response => {
      commit('SET_MY_PROFILE', response.data)
    })
  },
  loadProfile({ commit }, { token }) {
    return $http.get('user/me', {
      headers: {
        'x-auth-token': token
      }
    }).then(response => {
      commit('SET_MY_PROFILE', response.data)
    })
  },
}
const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  user(state) {
    return state.user
  },
  myProfile(state) {
    return state.my_profile
  },
  userToken(state) {
    return state.userToken
  },
  isDark(state) {
    return state.isDark
  },
  forgot_password_user(state) {
    return state.forgot_password_user
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
