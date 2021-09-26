import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allThreads: null,
}

const mutations = {
    SET_ALL_THREADS: (state, _threads) => {
        state.allThreads = _threads;
    },
    ADD_COMMENT_TO_THREADS: (state, _comment) => {
        state.allThreads.push(_comment);
    },
    ADD_SUBCOMMENT_TO_THREADS: (state, data) => {
        var index = state.allThreads.findIndex(x => x.id === data.comment_id);
        state.allThreads[index].sub.push(data.data);
    },
}

const getters = {
    getAllThreads(state) {
        return state.allThreads
    },
}

const actions = {
    fetchAllThreads({ commit }, { token, id }) {
        var bodyFormData = new FormData();
        bodyFormData.append('cmntid', id);
        return $http.post('/getthread/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }

        }).then(res => {
            commit('SET_ALL_THREADS', res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    sendComment({ commit }, { token, task_id, comment, tags, cmntid }) {
        var bodyFormData = new FormData();
        bodyFormData.append('task_id', task_id);
        bodyFormData.append('comment', comment);
        bodyFormData.append('tags', tags);
        bodyFormData.append('cmntid', cmntid);

        return $http.post('/addcomment/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            commit('ADD_COMMENT_TO_THREADS', res.data)
            return Promise.resolve(res)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    sendSubComment({ commit }, { token, task_id, comment, comment_id, tags }) {
        var bodyFormData = new FormData();
        bodyFormData.append('cmntid', task_id);
        bodyFormData.append('subcomment', comment);
        bodyFormData.append('comment_id', comment_id);
        bodyFormData.append('tags', tags);

        return $http.post('/addsubcomment/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            var _data = {
                data: res.data,
                comment_id: comment_id
            }
            commit('ADD_SUBCOMMENT_TO_THREADS', _data)
            return Promise.resolve(res)
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    sendDoubt({ commit }, { token, task_id, doubt, cmntid }) {
        var bodyFormData = new FormData();
        bodyFormData.append('task_id', task_id);
        bodyFormData.append('doubt', doubt);
        bodyFormData.append('cmntid', cmntid);

        return $http.post('/adddoubt/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            commit('ADD_COMMENT_TO_THREADS', res.data)
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
