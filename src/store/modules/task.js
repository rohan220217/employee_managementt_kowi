import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allTasks: [],
    allReviewers: [],
    allTasksCount: 0,
    newTasks: [],
    pendingTasks: [],
    completedTasks: [],
    task: {}

}
const getters = {
    getAllTasks(state) {
        return state.allTasks
    },
    getAllReviewers(state) {
        return state.allReviewers
    },
    getTask(state) {
        return state.task
    },
    getAllTasksCount(state) {
        return state.allTasksCount
    },
    getNewTasks(state) {
        return state.newTasks
    },
    getPendingTasks(state) {
        return state.pendingTasks
    },
    getCompletedTasks(state) {
        return state.completedTasks
    },

}

const mutations = {
    SET_ALL_TASKS: (state, _tasks) => {
        state.allTasks = _tasks;
        state.allTasksCount = _tasks.length;
    },
    SET_REVIEWERS: (state, _reviewers) => {
        state.allReviewers = _reviewers;
    },
    SET_TASK: (state, _task) => {
        state.task = _task;
    },
    SET_NEW_TASKS: (state, _tasks) => {
        state.newTasks = _tasks;
    },
    SET_PENDING_TASKS: (state, _tasks) => {
        state.pendingTasks = _tasks;
    },
    SET_COMPLETED_TASKS: (state, _tasks) => {
        state.completedTasks = _tasks;
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

    fetchTask({ commit }, { token, id }) {
        var bodyFormData = new FormData();
        bodyFormData.append('id', id);
        return $http.post('/taskdetail/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }

        }).then(res => {
            commit('SET_TASK', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    fetchNewPenDonTasks({ commit }, { token, query }) {
        var bodyFormData = new FormData();
        bodyFormData.append('query', query);
        return $http.post('/mytasks/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res.data)
            if (query == 'new') commit('SET_NEW_TASKS', res.data);
            else if (query == 'pending')
                commit('SET_PENDING_TASKS', res.data);
            else if (query == 'completed')
                commit('SET_COMPLETED_TASKS', res.data);
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
