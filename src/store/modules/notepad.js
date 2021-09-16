import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {
    allNotes: []

}

const getters = {
    getAllNotes(state) {
        return state.allNotes
    },

}
const mutations = {
    SET_ALL_NOTES: (state, _notes) => {
        state.allNotes = _notes;
    },
    ADD_TASK: (state, _note) => {
        state.allNotes.push(_note);
    },
    DELETE_TASK: (state, id) => {
        const todo_index = state.allNotes.map((todo) => todo.id).indexOf(id)
        state.allNotes.splice(todo_index, 1)
    },

}

const actions = {
    fetchUserNotepad({ commit }, token) {
        return $http.get('/stickynotes/', {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'undefined'
            }
        }).then(res => {
            console.log(res.data)
            commit('SET_ALL_NOTES', res.data);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    addNote({ commit }, { token, payload }) {
        var bodyFormData = new FormData();
        bodyFormData.append('title', payload.title);
        bodyFormData.append('desc', payload.desc);
        bodyFormData.append('hexcode', payload.hexcode);
        return $http.post('/stickynotes/', bodyFormData, {
            headers: {
                'Authorization': `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }

        }).then(res => {
            payload.id = res.data.note_id
            commit('ADD_TASK', payload);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    deleteNote({ commit }, { token, id }) {
        return $http.delete('/stickynotes/', {
            headers: {
                'Authorization': `Token ${token}`,
            },
            data: { 'note_id': id },
        }).then(res => {
            commit('DELETE_TASK', id);
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
