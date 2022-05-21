import {defaultRoles} from "../../constants"
import Role from "../entity/Role"

export default {
    namespaced: true,
    state() {
        return {
            list: [...defaultRoles]
        }
    },
    
    actions: {
        setDefault({ commit }) {
            commit('setListAsDefault')
        },
        
        add({ commit }) {
            commit('addRole')
        },
        
        remove({ commit }, roleIndex) {
            commit('removeRole', roleIndex)
        }
    },
    
    mutations: {
        setListAsDefault(state) {
            state.list = [...defaultRoles]
        },
        
        addRole(state) {
            const role = new Role()
            state.list.push(role)
        },
        
        removeRole(state, roleIndex) {
            state.list = state.list.filter((_, index) => {
                return index !== roleIndex
            })
        }
    },
    
    getters: {
        /** @returns {Array<Role>} */
        list: state => state.list,
    }
}