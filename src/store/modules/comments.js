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
    


}

const getters = {
    getAllThreads(state) {
        return state.allThreads
    },

}

const actions = {
    fetchAllThreads({ commit }, { token, id }) {
        var bodyFormData = new FormData();
        bodyFormData.append('id', id);
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

    sendComment({ commit }, { token, task_id, comment, tags }) {
        console.log(task_id)
        console.log(comment)
        console.log(tags)
        var bodyFormData = new FormData();
        bodyFormData.append('task_id', task_id);
        bodyFormData.append('comment', comment);
        bodyFormData.append('tags', tags);

        return $http.post('/addcomment/', bodyFormData, {
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



}


export default {
    state,
    getters,
    mutations,
    actions
}
