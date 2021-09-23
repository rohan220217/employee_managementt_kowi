import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allReviewers: [],
    allEmployees: [],
    isShowNavBar: true
}
const getters = {
    getAllReviewers(state) {
        return state.allReviewers
    },
    getAllEmployees(state) {
        return state.allEmployees
    },
    isShowNavBar(state) {
        return state.isShowNavBar
    },

}

const mutations = {

    SET_REVIEWERS: (state, _reviewers) => {
        state.allReviewers = _reviewers;
    },
    SET_EMPLOYEES: (state, _employees) => {
        state.allEmployees = _employees;
    },
    SWITCH_NAVBAR: (state,) => {
        state.isShowNavBar = !state.isShowNavBar;
    },

}

const actions = {

    switchNavBar({ commit },) {
        commit('SWITCH_NAVBAR');

    },
    fetchDetailUsingPinCode({ commit }, pincode) {
        return axios
            .get(`https://api.postalpincode.in/pincode/${pincode}`)
            .then(res => {
                return Promise.resolve(res.data)
            }).catch(err => {
                console.log(err)
                return Promise.reject(err)
            })
    },
    fetchAllReviewers({ commit }, token) {
        return $http.get('/showrev/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_REVIEWERS', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    fetchAllEmployees({ commit }, token) {
        return $http.get('/emplist/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_EMPLOYEES', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },


    startTask({ commit }, { token, data }) {
        var bodyFormData = new FormData();

        bodyFormData.append('id', data);

        return $http.post('/start/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            return Promise.resolve(res)

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
