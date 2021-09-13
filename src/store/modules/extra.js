import axios from 'axios'
const { baseURL } = require('@/assets/js/config')
const $http = axios.create({
    baseURL
})

const state = {

}

const mutations = {



}

const actions = {
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


}
const getters = {


}

export default {
    state,
    getters,
    mutations,
    actions
}
