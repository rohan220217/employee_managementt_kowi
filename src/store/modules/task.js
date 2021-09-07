import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allTasks: [],

}
const getters = {


    getAllTask(state) {
        return state.allTasks
    },

}

const mutations = {
    SET_TASKS: (state, _tasks) => {
        state.allTasks = _tasks;
    },

}

const actions = {
    fetchAllTasks({ commit }, token) {
        return $http.get('/mytasks/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    logoutUser({ commit }) {
        commit('DELETE_TOKEN')
    },

}


export default {
    state,
    getters,
    mutations,
    actions
}
