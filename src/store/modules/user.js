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

  isKowiDark: localStorage.getItem('isKowiDark') ? localStorage.getItem('isKowiDark') : 'light',
  userData: null,
}
const getters = {
  getIsDark(state) {
    return state.isKowiDark
  },
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
  getUserData(state) {
    return state.userData
  },

}


const mutations = {

  SET_USER_DATA: (state, data) => {
    state.userToken = data.token
    state.userId = data.emp_id
    state.userDoj = data.emp_dateofjoining
    state.userEmail = data.email
    state.userName = data.name
    localStorage.setItem('kowiEmpToken', data.token)
    localStorage.setItem('kowiEmpId', data.emp_id)
    localStorage.setItem('kowiEmpDoj', data.emp_dateofjoining)
    localStorage.setItem('kowiEmpEmail', data.email)
    localStorage.setItem('kowiEmpName', data.name)
  },
  SET_PERSONAL_DATA: (state, data) => {
    state.userData = data
    
  },

  SET_USER_NAME: (state, name) => {
    state.userName = name
    localStorage.setItem('kowiEmpName', name)
  },
  DELETE_DATA: (state) => {
    state.userToken = ''
    localStorage.clear();
  },
  TOGGLE_DARK_MODE: (state) => {
    localStorage.removeItem('isKowiDark')
    if (state.isKowiDark == 'light') {
      state.isKowiDark = 'dark'
    } else {
      state.isKowiDark = 'light'
    }
    localStorage.setItem('isKowiDark', state.isKowiDark)
    // state.isKowiDark = data
    // console.log(data)
    // localStorage.setItem('isKowiDark', data)
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
    var bodyFormData = new FormData();
    for (let detail_key in detail)
      bodyFormData.append(detail_key, detail[detail_key]);


    // bodyFormData.append('fname', detail.fname);
    // bodyFormData.append('lname', detail.lname);
    // bodyFormData.append('mobno', detail.mobno);
    // bodyFormData.append('dob', detail.dob);
    // bodyFormData.append('aadhar', detail.aadhar);
    // bodyFormData.append('bloodgroup', detail.bloodgroup);
    // bodyFormData.append('colorhex', detail.colorhex);

    return $http.post('/addpersonal/', bodyFormData, {
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserBankDetail({ commit }, { token, detail }) {
    var bodyFormData = new FormData();

    for (let detail_key in detail)
      bodyFormData.append(detail_key, detail[detail_key]);

    // bodyFormData.append('accountno', detail.accountno);
    // bodyFormData.append('branchname', detail.branchname);
    // bodyFormData.append('accountname', detail.accountname);
    bodyFormData.append('ifsc', detail.ifsc);

    return $http.post('/addbank/', bodyFormData, {
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },
  sendUserAddressDetail({ commit }, { token, detail }) {
    var bodyFormData = new FormData();

    for (let detail_key in detail)
      bodyFormData.append(detail_key, detail[detail_key]);

    // bodyFormData.append('main_address', detail.main_address);
    // bodyFormData.append('address_type', detail.address_type);
    // bodyFormData.append('city', detail.city);
    // bodyFormData.append('state', detail.state);
    // bodyFormData.append('landmark', detail.landmark);
    // bodyFormData.append('mobno', detail.mobno);
    // bodyFormData.append('name', detail.name);
    // bodyFormData.append('pincode', detail.pincode);
    // bodyFormData.append('locality', detail.locality);
    // bodyFormData.append('alternatemobno', detail.alternatemobno);

    return $http.post('/addaddress/', bodyFormData, {
      headers: {
        'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      commit('SET_USER_NAME', detail.name)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  },

  logoutUser({ commit }) {
    commit('DELETE_DATA')
  },
  toggleDark({ commit }, data) {
    commit('TOGGLE_DARK_MODE')
  },

  fetchUserData({ commit }, token) {
    return $http.get('/getemployeedata/', {
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'undefined'
        }
    }).then(res => {
        commit('SET_PERSONAL_DATA', res.data);
    }).catch(err => {
        console.log(err)
        return Promise.reject(err)
    })
},

}

export default {
  state,
  getters,
  mutations,
  actions
}
