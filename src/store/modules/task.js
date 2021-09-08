import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allTasks: [],
    allTasksCount: 0,
    newTasks: [],

}
const getters = {
    getAllTasks(state) {
        return state.allTasks
    },
    getAllTasksCount(state) {
        return state.allTasksCount
    },
    getNewTasks(state) {
        return state.newTasks
    },

}

const mutations = {
    SET_ALL_TASKS: (state, _tasks) => {
        state.allTasks = _tasks;
        state.allTasksCount = _tasks.length;
    },
    SET_NEW_TASKS: (state, _tasks) => {
        state.newTasks = _tasks;
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
            commit('SET_ALL_TASKS', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    fetchNewTasks({ commit }, { token, query }) {
        var bodyFormData = new FormData();
        bodyFormData.append('query', query);
        return $http.post('/mytasks/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            commit('SET_NEW_TASKS', res.data);
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
