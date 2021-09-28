import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allReviewTask: [],
    newReviewTask: [],
    waitReviewTask: [],
    compReviewTask: [],

}

const getters = {
    getAllReviewTask(state) {
        return state.allReviewTask
    },
    getNewReviewTask(state) {
        return state.newReviewTask
    },
    getWaitReviewTask(state) {
        return state.waitReviewTask
    },
    getCompReviewTask(state) {
        return state.compReviewTask
    },

}
const mutations = {
    SET_ALL_REVIEW_TASK: (state, _reviewers) => {
        state.allReviewTask = _reviewers;
    },
    SET_NEW_REVIEW_TASK: (state, _reviewers) => {
        state.newReviewTask = _reviewers;
    },
    SET_WAITING_REVIEW_TASK: (state, _reviewers) => {
        state.waitReviewTask = _reviewers;
    },
    SET_COMPLETED_REVIEW_TASK: (state, _reviewers) => {
        state.compReviewTask = _reviewers;
    },

}

const actions = {

    fetchAllReviewTask({ commit }, token) {
        return $http.get('/reviewer/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_ALL_REVIEW_TASK', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    fetchNewWaiComTasks({ commit }, { token, query }) {
        var bodyFormData = new FormData();
        bodyFormData.append('query', query);
        return $http.post('/reviewer/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res.data)
            if (query == 'new') commit('SET_NEW_REVIEW_TASK', res.data);
            else if (query == 'waiting')
                commit('SET_WAITING_REVIEW_TASK', res.data);
            else if (query == 'completed')
                commit('SET_COMPLETED_REVIEW_TASK', res.data);
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
