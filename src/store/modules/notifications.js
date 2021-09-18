import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    unReadCount: 0,
    allNotifications: [],
    taskNotifications: [],
    unreadNotifications: [],
    starredNotifications: [],
    recentNotifications: [],

}
const getters = {
    getAllNotifications(state) {
        return state.allNotifications
    },
    getTaskNotifications(state) {
        return state.taskNotifications
    },
    getUnreadNotifications(state) {
        return state.unreadNotifications
    },
    getStarredNotifications(state) {
        return state.starredNotifications
    },
    getUnreadCount(state) {
        return state.unReadCount
    },
    getRecentNotifications(state) {
        return state.recentNotifications
    },

}


const mutations = {
    SET_ALL_NOTIFICATIONS: (state, _notifications) => {
        state.allNotifications = _notifications;
    },
    SET_TASK_NOTIFICATIONS: (state, _notifications) => {
        state.taskNotifications = _notifications;
    },
    SET_UNREAD_NOTIFICATIONS: (state, _notifications) => {
        state.unreadNotifications = _notifications;
    },
    SET_STARRED_NOTIFICATIONS: (state, _notifications) => {
        state.starredNotifications = _notifications;
    },
    SET_RECENT_NOTIFICATIONS: (state, _notifications) => {
        state.recentNotifications = _notifications;
    },
    SET_UNREAD_COUNT: (state, count) => {
        state.unReadCount = count;
    },
    READ_2_UNREAD: (state) => {
        state.unReadCount = 0;
        // state.unreadNotifications = [];
    },


}

const actions = {
    fetchUnreadCount({ commit }, token) {
        return $http.get('/notifs/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_UNREAD_COUNT', res.data.count)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    read2UnreadNotification({ commit }, token) {
        return $http.get('/readallnotifs/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('READ_2_UNREAD')
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    fetchAllNotifications({ commit }, token) {
        return $http.get('/getnotification/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_ALL_NOTIFICATIONS', res.data)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    fetchQueryNotifications({ commit }, { token, query }) {
        var bodyFormData = new FormData();
        bodyFormData.append('query', query);
        return $http.post('/getnotification/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            if (query == 'task')
                commit('SET_TASK_NOTIFICATIONS', res.data)
            else if (query == 'unread')
                commit('SET_UNREAD_NOTIFICATIONS', res.data)
            else if (query == 'starred')
                commit('SET_STARRED_NOTIFICATIONS', res.data)

            console.log(res.data)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    fetchRecentNotifications({ commit }, token) {
        return $http.get('/recentnotif/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            commit('SET_RECENT_NOTIFICATIONS', res.data)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    starNotification({ commit }, {token, value}) {
        var bodyFormData = new FormData();
        bodyFormData.append('id', value);
        return $http.post('/startnotif/', bodyFormData, {
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

}

export default {
    state,
    getters,
    mutations,
    actions
}
