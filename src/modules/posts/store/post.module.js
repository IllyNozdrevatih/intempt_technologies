import axios from "axios";

export const postModule = {
    namespaced: true,
    state: {
        postList: []
    },
    mutations: {
        UPDATE_POST_LIST(state, payload){
            state.postList = payload
        },
        EDIT_POST(state, postObj){
            const editedElIndex = state.postList.findIndex(postEl => postEl.id === postObj.id)
            state.postList[editedElIndex] = postObj
        },
        ADD_POST(state, payload) {
            state.postList = [payload].concat(state.postList)
        },
        REMOVE_POST(state, postId) {
            const postIndex = state.postList.findIndex(postItem => postItem.id === postId)
            state.postList.splice(postIndex, 1)
        }
    },
    actions: {
        async getPostList({commit}) {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
                commit('UPDATE_POST_LIST', data)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
